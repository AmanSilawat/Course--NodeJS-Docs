// ! "callsfunc" this function call exact number of times

const assert = require('assert');

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() { }

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func, 2);

callsfunc();
callsfunc();

// Will throw an error since callsfunc() was only called once.
tracker.verify();