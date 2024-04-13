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


interface ProjectCreate {
  title: string;
  description: string;
  target: number;
  deadline: number | undefined;
  image: string;
}

const ProjectCreateForm: React.FC = () => {
  // const { publishCampaign } = useStateContext();
  const [loading, setLoading] = useState(false);
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

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setForm({
  //     ...form,
  //     deadline: date?.getTime() ? Math.floor(date.getTime() / 1000) : undefined,
  //   });
  //   console.log("Here")
  //   publishCampaign?.(form);
  //   setForm({
  //     title: '',
  //     description: '',
  //     target: 0,
  //     deadline: 0,
  //     image: '',
  //   });
  // };


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-white rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[20px] text-[15px] leading-[38px] text-black">Pitch your Project</h1>
      </div>

      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
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
          <h4 className="font-epilogue font-bold text-xl text-white m-[10px]">Get Boost to your Project with XINRAISE</h4>
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
              <p className='text-sm'>Target *</p>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[330px]  text-[14px] h-[50px] py-[15px] sm:px-[25px] px-[15px] justify-start text-left font-normal border-[#3a3a43] bg-transparent hover:bg-transparent hover:text-white",
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
