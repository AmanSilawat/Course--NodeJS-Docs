const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 2 };
try {
    asyncLocalStorage.run(store, () => {
    console.log(asyncLocalStorage.getStore()); // Returns the store object
        throw new Error();
    });
} catch (e) {
    console.log(asyncLocalStorage.getStore()); // Returns undefined
    // The error will be caught here
}
