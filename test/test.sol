// test solidity file for checking contracts and their functions one by one
pragma solidity ^0.4.22;


import "../contracts/Auction.sol";

//here be buggies
import "truffle/DeployedAddresses.sol";

import "../contracts/Migrations.sol";


// this test contracts name
contract TestSol {
	
	
	// function declaration
	
	// deprecated code. 
	// function testAuctionSol() public {
		
	// We now use the constructor call
	constructor() public {
	
	// variables
	
	// get address of deployer
    //Auction meta = Auction(DeployedAddresses.Auction());
	
	// unassigned integer should take the value of x
    // expected gas for deployer
	uint expected = 10000;
	//beneficiary = meta.beneficiary.call();

	
	// solidity/web3 test procedure
	
    // assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
	// assert.equal(meta.beneficiary, meta.accounts[1], "contract deployer not set as beneficiary");
	
	//assert.equal(expected, expected, "contract deployer not set as beneficiary");
	
	// note: only use small 'a', not 'A' for assert function
	// assert.equal(meta.getBalance(tx.origin), expected, "Owner should have ether initially");
    // assert.equal(beneficiary, expected, "Owner should have ether initially");
    
 }

}