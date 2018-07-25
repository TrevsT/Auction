pragma solidity ^0.4.22;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Auction.sol";

contract TestAuction {

    function testAssignedBeneficiaryUsingDeployedContract() public {
        Auction auct = Auction(DeployedAddresses.Auction());

        address provided = auct.beneficiary();
        address expected = 0xeaC3b27b03f5617148a138E6B986684a7527182F;
        Assert.equal(provided, expected, "should assign the address of the contract deployer as the auction beneficiary");
    }


}
