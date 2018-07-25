var Auction = artifacts.require("./Auction.sol");

contract('Auction', function(accounts) {

    it("should assign the address of the contract deployer as the auction beneficiary", function() {
      var AuctionInstance;
   
        return Auction.deployed().then(function(instance) {
      AuctionInstance = instance;
      return AuctionInstance.beneficiary.call();
      
        }).then(function(beneficiary) {
            assert.equal(beneficiary, accounts[2], "contract deployer not set as beneficiary");
          });
        });

});