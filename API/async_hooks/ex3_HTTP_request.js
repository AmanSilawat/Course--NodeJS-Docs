const { createServer } = require('http');
const asyncHooks = require('async_hooks')
asyncHooks.createHook({ init, destroy }).enable();

const reqContextMap = new Map()
function createRequestContext(data) {
    reqContextMap.set(asyncHooks.executionAsyncId(), data)
}
function getRequestContext() {
    return reqContextMap.get(asyncHooks.executionAsyncId())
}
function init(asyncId, type, triggerAsyncId, resource) {
    // Store same context data for child async resources
    if (reqContextMap.has(triggerAsyncId)) {
        reqContextMap.set(asyncId, reqContextMap.get(triggerAsyncId))
    }
}
function destroy(asyncId) {
    if (reqContextMap.has(asyncId)) {
        reqContextMap.delete(asyncId)
    }
}
createServer((req, res) => {
    // createRequestContext(req)

    res.end('work');
    console.log(reqContextMap)
}).listen(3030);
