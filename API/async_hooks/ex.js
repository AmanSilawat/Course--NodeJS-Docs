const async_hooks = require('async_hooks')
const asyncHook = async_hooks.createHook({ init })
const fs = require('fs');
const util = require('util');

asyncHook.enable();

// init async hook
function init(asyncId, type, triggerAsyncId, resource) {
    debug(asyncId)
}
function debug(...args) {
    return fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
}

// two functions with async/await
const computeAnswer = async () => { 123 }
(async () => {
    await computeAnswer()
})()
