require("babel-polyfill");
var Auction = artifacts.require("./Auction.sol");
//Require installing Babel-Polyfil to use Async\Await functions @ npm install --save babel-polyfill

contract('Auction', function(accounts) {

    it("should assign an address as the auction beneficiary when the contract is instantiated", async function() {
        var auction =  await Auction.deployed();
        var beneficiary = await auction.beneficiary.call();
        
        assert.equal(beneficiary, accounts[0], "No beneficiary has been defined");
     });

     it("should set auction end time to current time + specified duration", async function() {
        var auction =  await Auction.deployed();
        //The contract output for uint numbers seems to output to a literal ('string') in javascript so parseInt is required to convert back to int
        var auctionStart = parseInt(await auction.auctionStartTime.call());
        var duration = parseInt(await auction.auctionDuration.call());
        var auctionEnd = parseInt(await auction.auctionEndTime.call());
      //AuctionStart/End names updated to AuctionStartTime/EndTime becuase JS was calling a function of the same name 'auctionEnd' 
        console.log("Start Time: " + auctionStart + " EndTime: " + auctionEnd +  " Duration: " + duration);

        assert.equal(auctionEnd, auctionStart + duration,"Auction end time not set correctly");
     });

     it("should place a new bid as the new highest bid", async function() {
      var auction =  await Auction.deployed();
      auction.bid({from: accounts[1], value: 200});
      var theHighestBidder = await auction.highestBidder.call();
      assert.equal(theHighestBidder, accounts[1], "Bid was not the new highest bid");
   });

}); 