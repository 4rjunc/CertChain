const hre = require("hardhat");

//Deploys smart contract
async function main() {
  const adder = await hre.ethers.deployContract("Certificate");
  await adder.waitForDeployment();

  console.log("Lock address", adder.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
