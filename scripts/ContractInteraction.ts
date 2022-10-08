import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const TOKENS_MINTED = ethers.utils.parseEther("1");
const ERC20VOTES_CONTRACT_ADDRESS = "0x8AE3C9bf30481901ce9B5b8AEAAc214aA67ec81F";
const ERC20VOTES_CONTRACT_ABI = [
    "function mint(address to, uint256 amount) public",
    "function _afterTokenTransfer(address from, address to, uint256 amount)",
    "function _mint(address to, uint256 amount)",
    "function _burn(address account, uint256 amount)",
];

async function main() {
    let ERC20VotesContract: any;

    const options = {
        // The default provider will be used if no provider is specified
        alchemy: process.env.ALCHEMY_API_KEY,
        // infura: process.env.INFURA_API_KEY,
    };

    const provider = new ethers.providers.AlchemyProvider("goerli", options.alchemy);

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    // console.log("Wallet address: ", wallet.address);
    const signer = wallet.connect(provider);

    ERC20VotesContract = new ethers.Contract(ERC20VOTES_CONTRACT_ADDRESS, ERC20VOTES_CONTRACT_ABI, signer);
    // console.log(ERC20VotesContract);

    // UNCOMMENT CODE TO MINT TOKENS TO MARCO
    // console.log("Minting new tokens for Marco's account...\n");
    // const mintTx = await ERC20VotesContract.mint(
    //     "0xa6d76cb2Ad1C948BC8888D348E33c05E4fA90475",
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Marco's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO RIC
    // console.log("Minting new tokens for Ric's account...\n");
    // const mintTx = await ERC20VotesContract.mint(
    //     "0x4748737b00CE9746737f85a3d1CdcD667a61d0A3",
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Ric's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO BRYCE
    // console.log("Minting new tokens for Bryce's account...\n");
    // const mintTx = await ERC20VotesContract.mint(
    //     "0x82C10e2A9959DEBbd9ac3a35b49CD6990421fd9B",
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Bryce's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO DAVID
    // console.log("Minting new tokens for David's account...\n");
    // const mintTx = await ERC20VotesContract.mint(
    //     "0xb0438eFFB3E55Da89929f8FE999Ec2e107B6c16c",
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to David's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO MAXWELL
    // console.log("Minting new tokens for Maxwell's account...\n");
    // const mintTx = await ERC20VotesContract.mint(
    //     "0x697B26622d0fd6DA5742cF4fD8e463213417741C",
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Maxwell's account!\n");
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});