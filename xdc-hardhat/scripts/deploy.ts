const hre = require("hardhat");

async function main() {
  // make sure to change the name of your contract
  const Pizza = await hre.ethers.getContractFactory("Pizza");
  // 4 in the bracket is to give the value to the parameter(_pizzaSize) in the constructor of the smart contract contract.
  const pizza = await Pizza.deploy(4);

  await pizza.waitForDeployment();

  console.log("pizza contract address:", pizza);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
