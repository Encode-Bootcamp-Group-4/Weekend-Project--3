import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { TokenizedBallot, TokenizedBallot__factory } from "../typechain-types";

dotenv.config();

const PROPOSALS = ["Ducks", "Geese", "Swans"];

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
      bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
}

async function main() {
    let TokenizedBallotContract: TokenizedBallot;

    const options = {
        // The default provider will be used if no provider is specified
        alchemy: process.env.ALCHEMY_API_KEY,
    };
    // console.log("options", options);

    const provider = new ethers.providers.AlchemyProvider("goerli", options.alchemy);
    
    // const accounts = await ethers.getSigners();

    console.log("Deploying TokenizedBallot contract...");
    console.log("Proposals: ");
    PROPOSALS.forEach((element, index) => {
        console.log(`Proposal N. ${index + 1}: ${element}`);
    });
    
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log("Wallet address: ", wallet.address);
    const signer = wallet.connect(provider);
    const balanceBN = await provider.getBalance(signer.getAddress());
    const balance = Number(ethers.utils.formatEther(balanceBN));
    console.log("Balance: ", balance);
    if (balance < 0.01) {
        throw Error("Not enough funds");
    }
    const TokenizedBallot = new TokenizedBallot__factory(signer);
    TokenizedBallotContract = await TokenizedBallot.deploy(
        convertStringArrayToBytes32(PROPOSALS),
        "0x8AE3C9bf30481901ce9B5b8AEAAc214aA67ec81F",
        7737151,
        );
    const deployment = await TokenizedBallotContract.deployed();
    console.log("Deployed Contract Address:",deployment.address);

    for (let index = 0; index < PROPOSALS.length; index++) {
        const proposal = await TokenizedBallotContract.proposals(index);
        const name = ethers.utils.parseBytes32String(proposal.name);
        // console.log({ index, name, proposal });
    }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});