const assert = require('assert/strict');

function boom() {
    throw new Error('BOOM');
}

assert.throws(boom, Error); // note no parentheses

boom('BOOM') // Error: BOOM