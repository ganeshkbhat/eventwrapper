# eventwrapper

event wrapper function module to wrap all methods of a function with events

Please find the demos in the folder [demos](./demos)

USAGE:

##### .wrapper

```
const EventWrapper = require("eventwrapper");

const myInstance = new EventWrapper();
myInstance.wrapper({
    method1: function (a, b) {
        return a + b;
    }
});

myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

myInstance.method1(2, 3); 
```

USAGE:

##### .wrapMethods

The .wrapMethods function is being used to wrap all methods within the function with events manually

```
const EventWrapper = require("eventwrapper");

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


myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

myInstance.method1(2, 3); 
```

USAGE:

##### .wrap

The .wrap function is being used to extend a function or class with life cycle events using the EventWrapper function

```
const EventWrapper = require("eventwrapper");

function MyWrapper() {
    EventWrapper.call(this, ...arguments);
    
    this.method1 = () => console.log("Test 1");

    EventWrapper.wrap();
}

let myInstance = new MyWrapper();

myInstance.events.on('methodCalled', (methodName, args) => {
    console.log(`Method ${methodName} called with arguments: ${args}`);
});

myInstance.events.on('methodCompleted', (methodName, result) => {
    console.log(`Method ${methodName} completed with result: ${result}`);
});

myInstance.method1(2, 3); 
```
