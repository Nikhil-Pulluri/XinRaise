import React, { useState } from 'react';
import { Button } from './ui/button';
import FormField from './FormField';
import { FaMoneyBillAlt } from "react-icons/fa";
import { ChangeEvent } from 'react';
import ReactLoading from 'react-loading';

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export const abi = [{ "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaigns", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "amountCollected", "type": "uint256" }, { "internalType": "string", "name": "image", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "string", "name": "_title", "type": "string" }, { "internalType": "string", "name": "_description", "type": "string" }, { "internalType": "uint256", "name": "_target", "type": "uint256" }, { "internalType": "uint256", "name": "_deadline", "type": "uint256" }, { "internalType": "string", "name": "_image", "type": "string" }], "name": "createCampaign", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "donateToCampaign", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getCampaigns", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "amountCollected", "type": "uint256" }, { "internalType": "string", "name": "image", "type": "string" }, { "internalType": "address[]", "name": "donators", "type": "address[]" }, { "internalType": "uint256[]", "name": "donations", "type": "uint256[]" }], "internalType": "struct CrowdFunding.Campaign[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "getDonators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "numberOfCampaigns", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }] as const;

import { createPublicClient, http } from 'viem'
import { xdcTestnet } from 'viem/chains'
import { useAccount, useWriteContract } from 'wagmi';

export const publicClient = createPublicClient({
  chain: xdcTestnet,
  transport: http()
})


interface ProjectCreate {
  title: string;
  description: string;
  target: number;
  deadline: number | undefined;
  image: string;
}

function ProjectCreateForm() {
  const { address } = useAccount();
  const { writeContract, error, status } = useWriteContract()
  async function CreateNewProject(form: ProjectCreate) {
    try {
      if (!address) {
        throw new Error('Address is undefined');
      }
      if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        throw new Error('Invalid Ethereum address format');
      }
      const targetBigInt = BigInt(form.target);
      const deadline = form.deadline !== undefined ? BigInt(form.deadline) : BigInt(0);
      const data = writeContract({
        account: address,
        address: '0x0F514aB775D63C58A5482dD3464868D24E6449F5',
        abi: abi,
        functionName: "createCampaign",
        args: [
          address,
          form.title,
          form.description,
          targetBigInt,
          deadline,
          form.image,
        ],
      });

      console.log("Transaction successful:", data);
      console.log(status);
    } catch (err) {
      console.error("Error creating new project with form data:", form);
      console.error("Error:", error);
    }
  }

  const [loading] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const [form, setForm] = useState<ProjectCreate>({
    title: '',
    description: '',
    target: 0,
    deadline: 0,
    image: '',
  });


  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <ReactLoading type={'bars'} color={'white'} height={60} width={60} />
      </div>

    )
  }



  const handleFormFieldChange = (fieldName: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      deadline: date?.getTime() ? Math.floor(date.getTime() / 1000) : undefined,
    });
    console.log("Here")
    CreateNewProject(form);
    setForm({
      title: '',
      description: '',
      target: 0,
      deadline: 0,
      image: '',
    });
  };


  return (
    <div className="bg-white flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-white rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[20px] text-[15px] leading-[38px] text-black">Pitch your Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Project Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <FormField
          labelName="Pitch the idea * "
          placeholder="Write your story"
          inputType="textarea"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}
        />

        <div className="w-full flex justify-center items-center p-4 bg-[#836FFF] rounded-[10px]">
          <FaMoneyBillAlt size={30} />
          <h4 className="font-epilogue font-bold text-xl text-black m-[10px]">Get Boost to your Project with XINRAISE</h4>
        </div>

        <div className="flex flex-wrap gap-[40px] items-center justify-center">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <div className='flex flex-col gap-3'>
            <Popover>
              <p className='text-sm text-black'>Target *</p>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[330px]  text-[14px] h-[50px] py-[15px] sm:px-[25px] px-[15px] justify-start text-left font-normal border-[#3a3a43] bg-transparent hover:bg-transparent hover:text-black",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className=''
                />
              </PopoverContent>
            </Popover>
          </div>

        </div>

        <FormField
          labelName="Project image *"
          placeholder="Place image URL of your Project"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <Button
            type="submit"
            className="bg-[#836FFF]">
            Submit new Project</Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreateForm;
