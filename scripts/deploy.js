//const { ethers } = require("hardhat");

const deploy = async () => {
    const deploy = async () =>{
        const [deploy] = await ethers.getSigners()
        console.log("Deploying contract with the account:",deploy.address);
        const ParkaPunks = await ethers.getContractFactory("ParkaPunks");
        const deployed = await ParkaPunks.deploy
        console.log("Parka Punk is deployed at:",deploy.address);
    };
}
deploy()
.then(()=>process.exit(0))
.catch(
    (error)=>{
        console.log(error);
        process.exit(1);
    });