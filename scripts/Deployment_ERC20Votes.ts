import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { MyToken, MyToken__factory } from "../typechain-types";

dotenv.config();

async function main() {
    let MyTokenContract: MyToken;

    const options = {
        // The default provider will be used if no provider is specified
        alchemy: process.env.ALCHEMY_API_KEY,
    }

    const provider = ethers.getDefaultProvider("goerli", options);

    console.log("Deploying MyToken contract...");

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");
    console.log("Wallet address: ", wallet.address);
    const signer = wallet.connect(provider);
    const myTokenFactory = new MyToken__factory(signer);
    MyTokenContract = await myTokenFactory.deploy();
    const deployment = await MyTokenContract.deployed();
    console.log("MyToken contract deployed to: ", deployment.address);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});