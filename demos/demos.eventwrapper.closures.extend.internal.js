/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: demos/demos.eventwrapper.closures.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

function WrapEvents() {
    let dc = 10;
    this.tester = 20;
    this.method1 = function() {
        console.log("tester1: ", this.tester);
    }
    this.method2 = function() {
        console.log("tester2: ", dc);
    }
}



console.log(myInstance);

myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

// Now, when you call the wrapped methods, they will emit events before and after execution
myInstance.method1(2, 3); // Example output for method1
myInstance.method2(); // Example output for method2

