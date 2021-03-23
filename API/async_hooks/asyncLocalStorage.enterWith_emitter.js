const { AsyncLocalStorage } = require('async_hooks');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const asyncLocalStorage = new AsyncLocalStorage();

const store = { id: 1 };

emitter.on('my-event', () => {
    asyncLocalStorage.enterWith(store);
});
emitter.on('my-event', () => {
    console.log(asyncLocalStorage.getStore()); // Returns the same object { id: 1 }
});

asyncLocalStorage.getStore(); // Returns undefined
emitter.emit('my-event');
asyncLocalStorage.getStore(); // Returns the same object