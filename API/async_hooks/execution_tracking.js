const ah = require('async_hooks');
ah.createHook({ init() { } }).enable(); // forces PromiseHooks to be enabled.
Promise.resolve(1729).then(() => {
    console.log(`eid ${ah.executionAsyncId()} tid ${ah.triggerAsyncId()}`);
});
// produces:
// eid 4 tid 3