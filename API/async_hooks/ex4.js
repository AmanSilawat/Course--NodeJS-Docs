const asyncHooks = require('async_hooks')
const stackMap = new Map()
asyncHooks.createHook({ init }).enable()
function init(asyncId, type, triggerAsyncId) {
    const parentStack = stackMap.get(triggerAsyncId) || ''
    let currentStack = {}
    Error.captureStackTrace(currentStack)
    stackMap.set(asyncId, currentStack.stack + parentStack)
}
const getError = function (...args) {
    const err = new Error(...args)
    err.stack += stackMap.get(asyncHooks.executionAsyncId())
    return err
}