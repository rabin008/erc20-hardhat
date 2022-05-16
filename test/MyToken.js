const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it('Should create initial supply correctly', async () => {
    const MyToken = await ethers.getContractFactory("MyToken")
    const totalSupply = 100001e3
    const deployed = await MyToken.deploy(totalSupply, "Example", "EXP")

    expect(await deployed.totalSupply()).to.equal(totalSupply)
  })
});
