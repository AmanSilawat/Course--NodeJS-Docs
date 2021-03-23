const assert = require('assert/strict');

assert.ifError('error');

/*
AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'error'
at node:internal/main/run_main_module:17:47 {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: 'error',
  expected: null,
  operator: 'ifError'
}
*/


// Create some random error frames.
let err;
(function errorFrame() {
    err = new Error('test error');
})();

(function ifErrorFrame() {
    assert.ifError(err);
})();