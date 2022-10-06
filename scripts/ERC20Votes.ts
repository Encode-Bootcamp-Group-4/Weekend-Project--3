import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

const TOKENS_MINTED = ethers.utils.parseEther("1");

async function main() {
    const [deployer, acc1, acc2, acc3] = await ethers.getSigners();
    const myTokenContractFactory = await ethers.getContractFactory("MyToken");
    const myTokenContract = await myTokenContractFactory.deploy();
    await myTokenContract.deployed();
    console.log(`\nMyToken deployed to: ${myTokenContract.address}\n`);
    const totalSupply = await myTokenContract.totalSupply();
    console.log(`Initial total supply after deployment: ${totalSupply}\n`);
    console.log("Minting new tokens for acc1...\n");
    const mintTx = await myTokenContract.mint(
        acc1.address, 
        TOKENS_MINTED
    );
    await mintTx.wait();
    const newTotalSupply = await myTokenContract.totalSupply();
    console.log(`New total supply after minting: ${ethers.utils.formatEther(newTotalSupply)}\n`);
    const acc1Balance = await myTokenContract.balanceOf(acc1.address);
    console.log(`acc1 balance: ${ethers.utils.formatEther(acc1Balance)}\n`);
    console.log("What us the current votePower of acc1?\n");
    const acc1InitialVotingPowerAfterMint = await myTokenContract.getVotes(acc1.address);
    console.log(`acc1's initial voting power after minting: ${ethers.utils.formatEther(acc1InitialVotingPowerAfterMint)}\n`);
    console.log("Delegating acc1's voting power to acc1...\n");
    const delegateTx = await myTokenContract.connect(acc1).delegate(acc1.address);
    await delegateTx.wait();
    const acc1VotingPowerAfterDelegation = await myTokenContract.getVotes(acc1.address);
    console.log(`acc1's voting power after delegation: ${ethers.utils.formatEther(acc1VotingPowerAfterDelegation)}\n`);
    const mintTx2 = await myTokenContract.mint(
        acc2.address, 
        TOKENS_MINTED
    );
    await mintTx2.wait();
    const mintTx3 = await myTokenContract.mint(
        acc3.address, 
        TOKENS_MINTED
    );
    await mintTx3.wait();
    const currentBlock = await ethers.provider.getBlock("latest");
    console.log(`Current block number: ${currentBlock.number}\n`);
    const pastVotes = await Promise.all([
        myTokenContract.getPastVotes(acc1.address, 4),
        myTokenContract.getPastVotes(acc1.address, 3),
        myTokenContract.getPastVotes(acc1.address, 2),
        myTokenContract.getPastVotes(acc1.address, 1),
        myTokenContract.getPastVotes(acc1.address, 0),
    ]);
    console.log({pastVotes});
    
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});