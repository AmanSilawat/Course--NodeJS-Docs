// !call the function number of times

const assert = require('assert');

const tracker = new assert.CallTracker();

function func() { }

// callsfunc() must be called exactly 1 time before tracker.verify().
const callsfunc = tracker.calls(func, 1);

callsfunc(); // first time called
callsfunc(); // second time SHOW ERROR

// Calls tracker.verify() and verifies if all tracker.calls() functions have
// been called exact times.
process.on('exit', () => {
    tracker.verify();
});

// ! output

/**

AssertionError [ERR_ASSERTION]: Function(s) were not called the expected number of times
    at new AssertionError (node:internal/assert/assertion_error:456:5)
    at CallTracker.verify (node:internal/assert/calltracker:88:13)
    at process.<anonymous> (/home/aman/frontend/Course--NodeJS-Docs/API/assert/assert.CallTracker/script.js:18:13)
    at process.emit (node:events:376:20) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: undefined,
    operator: undefined,
    'message 0': 'Expected the func function to be executed 1 time(s) but was executed 2 time(s).',
    'actual 0': 2,
    'expected 0': 1,
    'operator 0': 'func',
    'stack trace 0': Error
            at CallTracker.calls (node:internal/assert/calltracker:43:19)
            at Object.<anonymous> (/home/aman/frontend/Course--NodeJS-Docs/API/assert/assert.CallTracker/script.js:10:27)
            at Module._compile (node:internal/modules/cjs/loader:1102:14)
            at Object.Module._extensions..js (node:internal/modules/cjs/loader:1131:10)
            at Module.load (node:internal/modules/cjs/loader:967:32)
            at Function.Module._load (node:internal/modules/cjs/loader:807:14)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
            at node:internal/main/run_main_module:17:47
    }

*/