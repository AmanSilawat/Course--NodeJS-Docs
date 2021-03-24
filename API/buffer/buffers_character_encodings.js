const buf = Buffer.from('hello world', 'utf8');
console.log(buf) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'utf8'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>

console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

console.log(Buffer.from('fhqwhgads', 'base64'));
// Prints: <Buffer 7e 1a b0 86 06 9d>

// - - - - -

console.log(Buffer.from('fhqwhgads', 'binary')); // 'binary': Alias for 'latin1'
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>

console.log(Buffer.from('fhqwhgads', 'latin1'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>

console.log(Buffer.from('fhqwhgads', 'ascii'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>

// - - - - -

console.log(Buffer.from('fhqwhgads', 'ucs2'));  // 'ucs2': Alias of 'utf16le'
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

// - - - - -

Buffer.from('1ag', 'hex');
// Prints <Buffer 1a>, data truncated when first non-hexadecimal value
// ('g') encountered.

Buffer.from('1a7g', 'hex');
// Prints <Buffer 1a>, data truncated when data ends in single digit ('7').

Buffer.from('1634', 'hex');
// Prints <Buffer 16 34>, all data represented.