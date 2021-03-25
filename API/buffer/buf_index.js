// Copy an ASCII string into a `Buffer` one byte at a time.
// (This only works for ASCII-only strings. In general, one should use
// `Buffer.from()` to perform this conversion.)

const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
    console.log(str[i], str.charCodeAt(i));
    buf[i] = str.charCodeAt(i);
}

console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73>
console.log(buf.toString('utf8'));// Node.js
// Prints: Node.js