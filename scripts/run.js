const main = async () => {
  const helloContractFactory = await hre.ethers.getContractFactory('HelloWorld')
  const helloContract = await helloContractFactory.deploy()
  await helloContract.deployed()
  console.log('Contract deployed to:', helloContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
