/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: demos/demos.eventwrapper.function.instance.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const EventWrapper = require("../src/index");

function MyWrapper() {
    this.method1 = () => console.log("Test 1");
}

const myInstance = new EventWrapper();
myInstance.wrapMethods(MyWrapper);

// 
// function MyWrapper() {
//     EventWrapper.call(this, ...arguments);
//     this.method1 = () => console.log("Test 1");
// }
// 
// const myInstance = new MyWrapper();
// myInstance.wrapMethods();
// 

console.log(myInstance);

myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

// Now, when you call the wrapped methods, they will emit events before and after execution
myInstance.method1(2, 3); // Example output for method1
