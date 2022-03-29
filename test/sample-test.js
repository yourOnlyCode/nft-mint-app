const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("MyNFT", function() {
  it("Should mint and transfer an NFT to someone", async function() {
    const Boxx = await ethers.getContractFactory("Boxx");
    const boxx = await Boxx.deploy();
    await boxx.deployed();

    const recipient = ''; // 14:01 in video, run hardhat tests.
    const metadataURI = '';

    let balance = await boxx.balanceOf(recipient);
    expect(blance).to.equal(0);

    const newlyMintedToken = await boxx.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.01')}) // 14:55 in video, run hardhat tests.

    // wait until the transaction is mined
    await newlyMintedToken.wait();
    balance = await boxx.balanceOf(recipient)
    expect(balance).to.equal(1);

    expect(await boxx.isContentOwned(metadataURI)).to.equal(true);

  })
})
