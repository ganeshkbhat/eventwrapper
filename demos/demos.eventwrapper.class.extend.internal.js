/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: index.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const EventWrapper = require("eventwrapper");

class MyWrapper extends EventWrapper {

    constructor() {
        super();
        this.wrap();

        this.events.on('methodCalled', (methodName, args) => {
            console.log(`Method ${methodName} called with arguments: ${args}`);
        });
        this.events.on('methodCompleted', (methodName, result) => {
            console.log(`Method ${methodName} completed with result: ${result}`);
        });
    }

    method1 = () => console.log("Test 1");
}

let myInstance = new MyWrapper();
myInstance.method1(2, 3); 
