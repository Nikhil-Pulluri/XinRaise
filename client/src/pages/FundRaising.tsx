import FundingCard from '@/components/fundingCard'
import { CampaignData } from '@/constants';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { abi, publicClient } from './Home';

const FundRaising = () => {
  const { address, isConnected } = useAccount()
  const [projectFundData, setCampaigns] = useState<CampaignData[]>([]);
  console.log(isConnected)
  console.log(address)
  async function fetchAndLogContractData() {
    try {
      const data = await publicClient.readContract({
        address: "0x0F514aB775D63C58A5482dD3464868D24E6449F5",
        abi: abi,
        functionName: "getCampaigns",
      });

      console.log(data);
      const campaignsData: CampaignData[] = data.map((campaign, index) => ({
        pId: index,
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: campaign.target,
        deadline: campaign.deadline,
        amountCollected: campaign.amountCollected,
        image: campaign.image,
      }));
      setCampaigns(campaignsData);
    } catch (error) {
      console.error("Error reading contract:", error);
    }
  }
  fetchAndLogContractData();
  return (
    <div className='flex items-center justify-center gap-5 flex-col'>
      {projectFundData.map((project, index) => (
        <FundingCard key={index} project={project} />
      ))}

    </div>
  )
}

export default FundRaising
