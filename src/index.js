/**
 * 
 * Package: 
 * Author: Eventise, Ganesh B
 * Email: ganeshsurfs@gmail.com
 * Description: Nodejs module event wrapper function module to wrap all methods of a function with events
 * Install: 
 * Github: https://github.com/ganeshkbhat/eventwrapper
 * npmjs Link: 
 * File: src/index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const EventEmitter = require('events');

/**
 * EventWrapper
 *
 */
function EventWrapper() {
    // EventEmitter.call(this, arguments);
    this.events = new EventEmitter();

    /**
     * wrapper
     *
     * @param {*} object
     */
    this.wrapper = function (object) {
        if (typeof object !== "object" || object === null) {
            throw new Error('Invalid argument. Expected an object.');
        }

        // Get the method names of the object
        const methodNames = Object.getOwnPropertyNames(object)
            .filter((name) => typeof object[name] === 'function');

        // Wrap each method with an event emitter
        methodNames.forEach((methodName) => {
            const originalMethod = object[methodName];
            object[methodName] = () => {
                this.events.emit('methodCalled', methodName, arguments); // Emit an event before calling the method
                const result = originalMethod.apply(object, arguments); // Call the original method
                this.events.emit('methodCompleted', methodName, result); // Emit an event after the method completes
                return result;
            };
            this[methodName] = object[methodName];
        });
    }.bind(this);

    /**
     * getMethods
     *
     * @param {*} fnInstance
     * @param {boolean} [method=true]
     * @return {*} 
     */
    this.getMethods = function (fnInstance, method = true) {
        let m = !!method ? {} : [];
        // Get the keys of all instances
        for (const k in fnInstance) {
            // check if the type is of a function
            if (typeof fnInstance[k] === "function") {
                // if the return type needs method then return the method
                // else return name string in the object
                if (!!method) {
                    m[fnInstance[k].name] = fnInstance[k];
                } else {
                    m.push(fnInstance[k].name);
                }
            }
        }
        return m;
    }

    /**
     * wrapMethods
     * 
     * @param {boolean} [method=true]
     * @return {*} 
     */
    this.wrapMethods = function () {

    }.bind(this);
}

module.exports = EventWrapper;

