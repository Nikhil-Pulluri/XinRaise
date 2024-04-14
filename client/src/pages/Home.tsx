import { useAccount } from 'wagmi';
import ForumCard from '@/components/ForumCard';
import FundingCard from '@/components/fundingCard';
export const abi = [{ "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaigns", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "amountCollected", "type": "uint256" }, { "internalType": "string", "name": "image", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "string", "name": "_title", "type": "string" }, { "internalType": "string", "name": "_description", "type": "string" }, { "internalType": "uint256", "name": "_target", "type": "uint256" }, { "internalType": "uint256", "name": "_deadline", "type": "uint256" }, { "internalType": "string", "name": "_image", "type": "string" }], "name": "createCampaign", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "donateToCampaign", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getCampaigns", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "title", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "amountCollected", "type": "uint256" }, { "internalType": "string", "name": "image", "type": "string" }, { "internalType": "address[]", "name": "donators", "type": "address[]" }, { "internalType": "uint256[]", "name": "donations", "type": "uint256[]" }], "internalType": "struct CrowdFunding.Campaign[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }], "name": "getDonators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }, { "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "numberOfCampaigns", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }] as const;

import { createPublicClient, http } from 'viem'
import { xdcTestnet } from 'viem/chains'
import { useState } from 'react';
import { CampaignData } from '@/constants';
import React from 'react';

interface ForumData {
  date: string;
  category: string;
  title: string;
  description: string;
  readMoreLink: string;
  author: string;
}

export const publicClient = createPublicClient({
  chain: xdcTestnet,
  transport: http()
})

type InterleavedData = { type: 'project'; data: CampaignData } | { type: 'forum'; data: ForumData };

function Home() {
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

  const forumCardDataArray = [
    {
      date: 'Apr 12, 2024',
      category: 'Technology',
      title: 'The rise of AI in modern applications',
      description: 'Discover how AI is transforming various industries, from healthcare to finance, and what the future may hold.',
      readMoreLink: '#',
      author: '0x1234567890abcdef1234567890abcdef12345678'
    },
    {
      date: 'May 8, 2024',
      category: 'Health & Wellness',
      title: 'Mindfulness and Meditation for Stress Relief',
      description: 'Learn about the benefits of mindfulness and meditation practices in managing stress and promoting mental well-being.',
      readMoreLink: '#',
      author: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd'
    },
    {
      date: 'Jun 15, 2024',
      category: 'Education',
      title: 'Innovative Teaching Methods for the Future',
      description: 'Explore new and innovative teaching methods that are shaping the future of education and enhancing student learning.',
      readMoreLink: '#',
      author: '0x7890123456789012345678901234567890123456' // MetaMask wallet address
    },
    {
      date: 'Jul 20, 2024',
      category: 'Business',
      title: 'Sustainable Business Practices for Growth',
      description: 'Understand how sustainable business practices can drive growth and create long-term value for organizations.',
      readMoreLink: '#',
      author: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd' // MetaMask wallet address
    },
    {
      date: 'Aug 5, 2024',
      category: 'Environment',
      title: 'The Importance of Biodiversity Conservation',
      description: 'Learn about the significance of biodiversity conservation and the impact of human activity on ecosystems.',
      readMoreLink: '#',
      author: '0x5678901234567890123456789012345678901234' // MetaMask wallet address
    }
  ];


  const interleavedData: InterleavedData[] = [];
  const maxLength = Math.max(projectFundData.length, forumCardDataArray.length);

  for (let i = 0; i < maxLength; i++) {
    if (projectFundData[i]) {
      interleavedData.push({ type: 'project', data: projectFundData[i] });
    }
    if (forumCardDataArray[i]) {
      interleavedData.push({ type: 'forum', data: forumCardDataArray[i] });
    }
  }

  return (
    <div className='flex items-center justify-center gap-5 flex-col'>
      {interleavedData.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === 'project' ? (
            <FundingCard project={item.data} />
          ) : (
            <ForumCard data={item.data} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
