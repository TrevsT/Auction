require("babel-polyfill");
var Auction = artifacts.require("./Auction.sol");
//Require installing Babel-Polyfil to use Async\Await functions @ npm install --save babel-polyfill

contract('Auction', function(accounts) {

    it("should assign the address of the contract deployer as the auction beneficiary", async function() {
        var auction =  await Auction.deployed();
        var beneficiary = await auction.beneficiary.call();
        
        assert.equal(beneficiary, accounts[2], "contract deployer not set as beneficiary");
     });

     it("should set auction end time to current time + specified duration", async function() {
        var auction =  await Auction.deployed();
        var auctionEndTime = await auction.auctionEnd.call();
        var auctionStartTime = await auction.auctionStart.call();

        console.log(auctionStartTime + " Start Time");
        console.log(auctionEndTime + " EndTime");
        
        assert.equal(auctionEndTime, auctionStartTime,"Auction end time not set");

      
     });



}); 