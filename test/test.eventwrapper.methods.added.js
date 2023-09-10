const { expect } = require('chai');
const sinon = require('sinon');
const EventEmitter = require('events');

const EventWrapper = require("../src/index");

describe('Manipulating object functions using wrapper function', () => {
    describe('wrapper', () => {
        it('should wrap methods with event emitters - 1', () => {
            const myInstance = new EventWrapper();

            // Create a mock object with two methods
            const objToWrap = {
                method1: sinon.spy(() => 'Result 1'),
                method2: sinon.spy(() => 'Result 2'),
            };

            // Wrap the methods
            myInstance.wrapper(objToWrap);

            // Call the wrapped methods
            const result1 = objToWrap.method1(1, 2);
            const result2 = objToWrap.method2(3, 4);

            myInstance.events.on('methodCalled', function (data) {
                result1 = data;
                // Assert that the emitted data is correct
                expect(!!result1).to.equal(true);
                done(); // Callback to signal the test is complete
            }.bind(null, null, result1));

            myInstance.events.on('methodCalled', function (data) {
                result2 = data;
                // Assert that the emitted data is correct
                expect(!!result2).to.equal(true);
                done(); // Callback to signal the test is complete
            }.bind(null, null, result2));

            expect(result1).to.equal('Result 1');
            expect(result2).to.equal('Result 2');
        });

        it('should wrap methods with event emitters - 2', () => {
            const myInstance = new EventWrapper();

            // Create a mock object with two methods
            const objToWrap = {
                method1: sinon.spy(() => 10),
                method2: sinon.spy(() => 20),
            };

            // Wrap the methods
            myInstance.wrapper(objToWrap);

            // Call the wrapped methods
            const result1 = objToWrap.method1(1, 2);
            const result2 = objToWrap.method2(3, 4);

            myInstance.events.on('methodCalled', function (data) {
                result1 = data;
                // Assert that the emitted data is correct
                expect(!!result1).to.equal(true);
                done(); // Callback to signal the test is complete
            }.bind(null, null, result1));

            myInstance.events.on('methodCalled', function (data) {
                result2 = data;
                // Assert that the emitted data is correct
                expect(!!result2).to.equal(true);
                done(); // Callback to signal the test is complete
            }.bind(null, null, result2));

            expect(result1).to.equal(10);
            expect(result2).to.equal(20);
        });

        it('should throw an error for a non-object argument', () => {
            const myInstance = new EventWrapper();

            // Attempt to wrap a non-object argument
            const nonObjectArg = 'not_an_object';

            expect(() => myInstance.wrapper(nonObjectArg)).to.throw('Invalid argument. Expected an object.');
        });
    });
});
