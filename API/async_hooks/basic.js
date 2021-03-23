const async_hooks = require('async_hooks')
const asyncHook = async_hooks.createHook({ init })
const fs = require('fs');
const util = require('util');

asyncHook.enable()

console.log('hi');

function debug(...args) {
    return fs.writeFileSync(1, `${util.format(...args)}\n`, { flag: 'a' });
}
function init(asyncId, type, triggerAsyncId, resource) {
    console.log( debug(asyncId, type) )
}