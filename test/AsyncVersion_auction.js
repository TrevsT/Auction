var Auction = artifacts.require("./Auction.sol");

contract('Auction', function(accounts) {

    it("should assign the address of the contract deployer as the auction beneficiary", async function() {
        var auction =  await Auction.deployed();
        var beneficiary = await auction.beneficiary.call();
        assert.equal(beneficiary, accounts[2], "contract deployer not set as beneficiary")
     });


});