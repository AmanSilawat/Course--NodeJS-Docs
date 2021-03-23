const async_hooks = require('async_hooks');

// first way to create async_hooks
// const asyncHook = async_hooks.createHook({
//     init(asyncId, type, triggerAsyncId, resource) { },
//     destroy(asyncId) { }
// });


// second way to create async_hooks
class MyAsyncCallbacks {
    init(asyncId, type, triggerAsyncId, resource) { }
    destroy(asyncId) { }
}

class MyAddedCallbacks extends MyAsyncCallbacks {
    before(asyncId) { }
    after(asyncId) { }
}

const asyncHook = async_hooks.createHook(new MyAddedCallbacks());

console.log(asyncHook);