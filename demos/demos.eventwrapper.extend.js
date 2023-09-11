/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: demos/demos.eventwrapper.extend.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


function DemoFunction() {
    let dc = 10;
    this.tester = 20;
    this.method1 = function() {
        console.log("tester1: ", this.tester);
    }
    this.method2 = function() {
        console.log("tester2: ", dc);
    }
}
