import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk";
import { pack, keccak256 } from "@ethersproject/solidity";
import { getCreate2Address } from "@ethersproject/address";

const deploySlashToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const slashToken = await hre.ethers.getContract("SlashToken", deployer);
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const pair = getCreate2Address(
    FACTORY_ADDRESS,
    keccak256(["bytes"], [pack(["address", "address"], [slashToken.address, WETH])]),
    INIT_CODE_HASH,
  );
  console.log("SLASH-WETH Pair address is - ", pair);
  console.log("Slash Token address is - ", slashToken.address);
  const slashVault = await deploy("SlashVault", {
    from: deployer,
    // Contract constructor arguments
    args: [
      slashToken.address,
      pair,
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      "10000000000000000000000000",
      "16759639",
    ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract

  console.log("SLASH-WETH Vault deployed to:", slashVault.address);
};

export default deploySlashToken;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags SlashVault
deploySlashToken.tags = ["SlashVault"];
