// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract HelloWorld {
  string public greet = "Hello, Tunde James";

   constructor() {
      console.log("Yo yo, I am a greeting contract and I am smart");
    }

  function get() public view returns(string memory) {
    return greet;  
  }

  function set(string calldata newName) external {
    greet = newName;
  }
}