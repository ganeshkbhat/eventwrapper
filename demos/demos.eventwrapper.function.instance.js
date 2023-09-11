/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: .js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const EventWrapper = require("../src/index");

const myInstance = new EventWrapper();
myInstance.wrapper({
    method1: function (a, b) {
        return a + b;
    }
});

console.log(myInstance);

myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

// Now, when you call the wrapped methods, they will emit events before and after execution
myInstance.method1(2, 3); // Example output for method1
