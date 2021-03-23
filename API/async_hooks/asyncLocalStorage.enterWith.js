const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 1 };
// Replaces previous store with the given store object
asyncLocalStorage.enterWith(store);
console.log(asyncLocalStorage.getStore()); // Returns the store object
// someAsyncOperation(() => {
//     asyncLocalStorage.getStore(); // Returns the same object
// });