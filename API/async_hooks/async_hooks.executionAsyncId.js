const async_hooks = require('async_hooks');
const { constants } = require('buffer');
const fs = require('fs');
const path = require('path');

let curr_path = path.dirname(__dirname) + '/async_hooks.executionAsyncId.js'

console.log(async_hooks.executionAsyncId());  // 1 - bootstrap
fs.open(curr_path, 'r', (err, fd) => {
    console.log(async_hooks.executionAsyncId());  // 6 - open()
});