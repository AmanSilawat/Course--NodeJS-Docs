// Requiring the module 
const assert = require('assert').strict;

// Function call 
try {
    let res = assert(0);
    console.log(res); // undefined
} catch (error) {
    console.log("Error:", error)
}

// ! output

/*

Error: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(0)

    at Object.<anonymous> (/home/frontend/Course--NodeJS-Docs/API/assert/assert.strict.js/script.js:6:15)
    at Module._compile (node:internal/modules/cjs/loader:1102:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1131:10)
    at Module.load (node:internal/modules/cjs/loader:967:32)
    at Function.Module._load (node:internal/modules/cjs/loader:807:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47 {
        generatedMessage: true,
        code: 'ERR_ASSERTION',
        actual: 0,
        expected: true,
        operator: '=='
    }

*/