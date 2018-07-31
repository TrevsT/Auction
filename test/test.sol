//test
pragma solidity ^0.4.22;


import "../contracts/Auction.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Migrations.sol";


//this test contracts name
contract TestSol {
	
	
	//function declaration
	//deprecated code
	function testAuctionSol() public {
	
	//constructor() public {
	
	//variable = address
    Auction meta = Auction(DeployedAddresses.Auction());
	
	//unassigned integer should take the value of x
    //uint expected = 10000;

	//solidity/web3 test procedure
    // Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
	assert.equal(meta, accounts[2], "contract deployer not set as beneficiary");
    
 }

}