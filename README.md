# eventwrapper

event wrapper function module to wrap all methods of a function with events

Please find the demos in the folder [demos](./demos)

USAGE:

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

