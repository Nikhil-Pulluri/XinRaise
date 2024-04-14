import { useReadContract } from "wagmi";
import abi from "./fundingAbi";



export default function ReadContract() {

  const { data } = useReadContract({
    abi,
    address: '0x0F514aB775D63C58A5482dD3464868D24E6449F5',
    functionName: 'totalSupply',
  });

  if (data) {
    console.log('Contract data:', data);
  }
};
