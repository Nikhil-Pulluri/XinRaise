import { IoHome } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { MdCampaign } from "react-icons/md";

export const navlinks = [
  {
    name: 'home',
    icon: <IoHome />,
    link: '/',
  },
  {
    name: 'dashboard',
    icon: <MdDashboard />,
    link: '/dashboard'
  },
  {
    name: 'Analytics',
    icon: <MdCampaign />,
    link: '/analysis',
  },
  {
    name: 'Create',
    icon: <MdCampaign />,
    link: '/create-campaign',
  },
  {
    name: 'Discussion',
    icon: <MdOutlinePayment />,
    link: '/discussion',
    disabled: true,
  },
  {
    name: 'Fund Raising',
    icon: <SiGoogleanalytics />,
    link: '/analysis'
  },
  {
    name: 'Stocks',
    icon: <BiMoneyWithdraw />,
    link: '/withdraw',
    disabled: true,
  }
];


export interface CampaignData {
  pId: number;
  owner: `0x${string}`;
  title: string;
  description: string;
  target: bigint;
  deadline: bigint;
  amountCollected: bigint;
  image: string;
}


export interface Donation {

}
