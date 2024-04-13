// const hre = require("hardhat");

// async function main() {
//   // make sure to change the name of your contract
  
//   const Campaign = await hre.ethers.getContractFactory("CrowdFunding");
//   // 4 in the bracket is to give the value to the parameter(_pizzaSize) in the constructor of the smart contract contract.
//   const campaign = await Campaign.deploy();


//   // const campaign = await Campaign.attach("0x6b197d95Dc89D4f0118B37c08bc2fdD2E192b8f4");

//   await campaign.waitForDeployment();
//   // const numberofCampaigns = await campaign.createCampaign("0x6b197d95Dc89D4f0118B37c08bc2fdD2E192b8f4","Dimo Hacks","This is a cool project that we are building for dimo hacks","23","1713097011","https://jade-immense-parrotfish-172.mypinata.cloud/ipfs/QmWPn53epYHSyR376EiHupy6AWfT4CoN4uqMbZoSWY7FBX");

//   // console.log("Campaign creation successfull",numberofCampaigns);

//   // const allcampaigns = campaign.getCampaigns();
//   // console.log("Campaigns are:",{allcampaigns});

//   console.log("pizza contract address:", campaign);
// }

// // Call the main function and catch if there is any error
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });




import { ethers } from "hardhat";

async function main() {
  const XRC20 = await ethers.getContractFactory("XRC20Token");
  const myToken = await XRC20.deploy("MyToken", "MTK", 18, 1000);

  
  await myToken.waitForDeployment();

  console.log("Token Successfully Deployed!");
  console.log(`Token address: `,myToken );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
