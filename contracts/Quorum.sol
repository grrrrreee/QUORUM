pragma solidity ^0.5.0;

contract Quorum {
    
    uint public index;
    // 여기다 나중에 주소 선언해주면 좋을듯
    
    struct Person {
        uint    age;
        string  name;
        uint    index;
        address Address;
    }
    
    Person[] people;
    mapping(string => uint) number;
    
    function createpeople(uint age, string memory name) public returns (uint){
        Person memory person = Person(age, name, index, msg.sender);
        people.push(person);
        
        number[name] = index;
        
        index ++;
    }
    
    function get(string memory name) public view returns (uint) {
        return number[name];
    }
    //api 로 받아오는 부분
    //arbitrage 논리 자체는 detect가 가능하다는 것으로 논리를 펼치기
    function balancing(uint number, uint number_2) payable public {
        uint parameter = (number - number_2) / number * 100 ;
        if(parameter > 15) {
            0x74031A3c092Ec3fDced18C60eB7ab91bCD547cc1.transfer(parameter / 2);
        }
        else {
            0x74031A3c092Ec3fDced18C60eB7ab91bCD547cc1.transfer(1);
        }
    }
    
}