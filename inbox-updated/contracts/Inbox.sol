// SPDX-License-Identifier: MIT

pragma solidity ^0.8;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    string public message;

    // function Inbox(string initialMessage) public {
    //     message = initialMessage;
    // } deprecated syntax

    constructor (string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}