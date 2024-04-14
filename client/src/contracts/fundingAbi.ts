// interface Campaign {
//   owner: string;
//   title: string;
//   description: string;
//   target: number;
//   deadline: number;
//   amountCollected: number;
//   image: string;
//   donators: string[];
//   donations: number[];
// }


const abi = [
  {
    type: 'function',
    name: 'createCampaign',
    stateMutability: 'nonpayable',
    inputs: [
      { name: '_owner', type: 'string' },
      { name: '_title', type: 'string' },
      { name: '_description', type: 'string' },
      { name: '_target', type: 'uint256' },
      { name: '_deadline', type: 'uint256' },
      { name: '_image', type: 'string' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    type: 'function',
    name: 'donateToCampaign',
    stateMutability: 'payable',
    inputs: [{ name: '_id', type: 'uint256' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'getDonators',
    stateMutability: 'view',
    inputs: [{ name: '_id', type: 'uint256' }],
    outputs: [
      { name: 'donators', type: 'address[]' },
      { name: 'donations', type: 'uint256[]' }
    ]
  },
  {
    type: 'function',
    name: 'getCampaigns',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'campaigns', type: 'Campaign[]' }]
  }
];

export default abi

