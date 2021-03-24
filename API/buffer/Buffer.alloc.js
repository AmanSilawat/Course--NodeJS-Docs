const buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>

// - - - - -

const buf2 = Buffer.alloc(5, 'a');

console.log(buf2);
// Prints: <Buffer 61 61 61 61 61>

// - - - - -

const buf3 = Buffer.alloc(10, 'aa', 'base64');

console.log(buf3);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>