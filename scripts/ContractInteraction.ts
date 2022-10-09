import { ethers } from "hardhat";
import  web3  from "web3";
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
const TOKENIZEDBALLOT_CONTRACT_ADDRESS = "0xA56c8B251433a29c4aB216D0bC2f6A38CD1B17a0";
const TOKENIZEDBALLOT_CONTRACT_ABI = [
    "function getPastVotes(address account, uint256 blockNumber) public view returns (uint256)",
    "function votePower(address account) public view returns (uint256)",
    "function vote(uint256 proposal, uint256 amount) public",
    "function winningProposal() public view returns (uint256)",
    "function winnerName() public view returns (bytes32)",
];
const MARCO_ADDRESS="0xa6d76cb2Ad1C948BC8888D348E33c05E4fA90475";
const RIC_ADDRESS="0x4748737b00CE9746737f85a3d1CdcD667a61d0A3";
const BRYCE_ADDRESS="0x82C10e2A9959DEBbd9ac3a35b49CD6990421fd9B";
const DAVID_ADDRESS="0xb0438eFFB3E55Da89929f8FE999Ec2e107B6c16c";
const MAXWELL_ADDRESS="0x697B26622d0fd6DA5742cF4fD8e463213417741C";
const BRYCE_ADDRESS_2="0x5D6e74bd320bc12dE273c705198b4a1d6c63832A";

async function main() {
    let MyTokenContract: any;
    let TokenizedBallotContract: any;

    const options = {
        // The default provider will be used if no provider is specified
        alchemy: process.env.ALCHEMY_API_KEY,
    };

    const provider = new ethers.providers.AlchemyProvider("goerli", options.alchemy);

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    // console.log("Wallet address: ", wallet.address);
    const signer = wallet.connect(provider);

    MyTokenContract = new ethers.Contract(MYTOKEN_CONTRACT_ADDRESS, MYTOKEN_CONTRACT_ABI, signer);
    TokenizedBallotContract = new ethers.Contract(TOKENIZEDBALLOT_CONTRACT_ADDRESS, TOKENIZEDBALLOT_CONTRACT_ABI, signer);
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

    // UNCOMMENT CODE TO DELEGATE VOTING POWER AND CHANGE ADDRESS
    // console.log(`Delegating voting power to ${ BRYCE_ADDRESS }...\n`);
    // const delegateTx = await MyTokenContract.delegate(
    //     BRYCE_ADDRESS
    // );
    // await delegateTx.wait();
    // console.log("Voting power delegated!\n");
    // // const votingPowerAfterDelegation = await MyTokenContract.getVotes( BRYCE_ADDRESS );
    // const votingPowerAfterDelegation = await TokenizedBallotContract.votePower( BRYCE_ADDRESS );
    // console.log(`Voting power of ${BRYCE_ADDRESS} after delegation: ${ethers.utils.formatEther(votingPowerAfterDelegation)}\n`);

    // UNCOMMENT CODE TO VOTE FOR A PROPOSAL AND CHANGE PROPOSAL NUMBER
    // console.log("Voting for proposal 1...\n");
    // const voteTx = await TokenizedBallotContract.vote(1, ethers.utils.parseEther("1"));
    // await voteTx.wait();
    // console.log("Voted for proposal 1!\n");
    
    // UNCOMMENT CODE TO GET VOTING POWER AND CHANGE ADDRESS
    // console.log("Getting voting power...\n");
    // const votingPower = await TokenizedBallotContract.votePower(BRYCE_ADDRESS);
    // console.log(`Voting power: ${ethers.utils.formatEther(votingPower)}\n`);

    // UNCOMMENT CODE TO QUERY WINNING PROPOSAL
    // console.log("Getting winning proposal...\n");
    // const winningProposal = await TokenizedBallotContract.winningProposal();
    // console.log(`Winning proposal: ${winningProposal}\n`);

    // UNCOMMENT CODE TO QUERY WINNER NAME
    // console.log("Getting winner name...\n");
    // const winnerName = await TokenizedBallotContract.winnerName();
    // console.log(`Winner name: ${web3.utils.hexToUtf8(winnerName)}\n`);
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});