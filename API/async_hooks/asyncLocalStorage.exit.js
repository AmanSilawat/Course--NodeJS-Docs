const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

// Within a call to run
const store = { id: 1 };
// Replaces previous store with the given store object
asyncLocalStorage.enterWith(store);

try {
    asyncLocalStorage.getStore(); // Returns the store object or value
    asyncLocalStorage.exit(() => {
        console.log(asyncLocalStorage.getStore()); // Returns undefined
        throw new Error();
    });
} catch (e) {
    console.log(asyncLocalStorage.getStore()); // Returns the same object or value
    // The error will be caught here
}