import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const TOKENS_MINTED = ethers.utils.parseEther("1");
const MYTOKEN_CONTRACT_ADDRESS = "0x8AE3C9bf30481901ce9B5b8AEAAc214aA67ec81F";
const MYTOKEN_CONTRACT_ABI = [
    "function mint(address to, uint256 amount) public",
    "function _afterTokenTransfer(address from, address to, uint256 amount)",
    "function _mint(address to, uint256 amount)",
    "function _burn(address account, uint256 amount)",
    "function totalSupply() public view returns (uint256)",
    "function getVotes(address account) public view returns (uint256)",
    "function delegate(address delegatee) public",
];
const TOKENIZEDBALLOT_CONTRACT_ADDRESS = "0xEA9288fbBe3f6F8616aAEa2Fd367615E6a4D6A52";
const TOKENIZEDBALLOT_CONTRACT_ABI = [
    "function getPastVotes(address account, uint256 blockNumber) public view returns (uint256)",
    "function votePower(address account) public view returns (uint256)",
    "function vote(address proposal, uint256 amount) public",
    "function winningProposal() public view returns (uint256)",
    "function winnerName() public view returns (bytes32)",
];
const MARCO_ADDRESS="0xa6d76cb2Ad1C948BC8888D348E33c05E4fA90475";
const RIC_ADDRESS="0x4748737b00CE9746737f85a3d1CdcD667a61d0A3";
const BRYCE_ADDRESS="0x82C10e2A9959DEBbd9ac3a35b49CD6990421fd9B";
const DAVID_ADDRESS="0xb0438eFFB3E55Da89929f8FE999Ec2e107B6c16c";
const MAXWELL_ADDRESS="0x697B26622d0fd6DA5742cF4fD8e463213417741C";

async function main() {
    let MyTokenContract: any;

    const options = {
        // The default provider will be used if no provider is specified
        alchemy: process.env.ALCHEMY_API_KEY,
        // infura: process.env.INFURA_API_KEY,
    };

    const provider = new ethers.providers.AlchemyProvider("goerli", options.alchemy);

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    // console.log("Wallet address: ", wallet.address);
    const signer = wallet.connect(provider);

    MyTokenContract = new ethers.Contract(MYTOKEN_CONTRACT_ADDRESS, MYTOKEN_CONTRACT_ABI, signer);
    // console.log(MyTokenContract);

    // MINT FUNCTIONS //

    // UNCOMMENT CODE TO MINT TOKENS TO MARCO
    // console.log("Minting new tokens for Marco's account...\n");
    // const mintTx = await MyTokenContract.mint(
    //     MARCO_ADDRESS,
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Marco's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO RIC
    // console.log("Minting new tokens for Ric's account...\n");
    // const mintTx = await MyTokenContract.mint(
    //     RIC_ADDRESS,
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Ric's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO BRYCE
    // console.log("Minting new tokens for Bryce's account...\n");
    // const mintTx = await MyTokenContract.mint(
    //     BRYCE_ADDRESS,
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Bryce's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO DAVID
    // console.log("Minting new tokens for David's account...\n");
    // const mintTx = await MyTokenContract.mint(
    //     DAVID_ADDRESS,
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to David's account!\n");

    // UNCOMMENT CODE TO MINT TOKENS TO MAXWELL
    // console.log("Minting new tokens for Maxwell's account...\n");
    // const mintTx = await MyTokenContract.mint(
    //     MAXWELL_ADDRESS,
    //     TOKENS_MINTED
    // );
    // await mintTx.wait();
    // console.log("Tokens minted to Maxwell's account!\n");

    // Total supply of tokens
    // const totalSupply = await MyTokenContract.totalSupply();
    // console.log("Total supply of tokens: ", ethers.utils.formatEther(totalSupply));

    // DELEGATE VOTING POWER //

    // UNCOMMENT CODE TO DELEGATE VOTING POWER TO BRYCE
    console.log("Delegating voting power to Bryce...\n");
    const delegateTx = await MyTokenContract.delegate(
        BRYCE_ADDRESS
    );
    await delegateTx.wait();
    console.log("Voting power delegated to Bryce!\n");
    const bryceVotingPowerAfterDelegation = await MyTokenContract.getVotes( BRYCE_ADDRESS );
    console.log(`Bryce's voting power after delegation: ${ethers.utils.formatEther(bryceVotingPowerAfterDelegation)}\n`);

};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});