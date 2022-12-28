// SimpleContract.sol
pragma solidity ^0.4.18;
contract SimpleContract {
    uint age;
    
    function getAge() returns (uint) {
        return age;
    }
    
    function setAge(uint newAge) {
        age = newAge;
    }
}