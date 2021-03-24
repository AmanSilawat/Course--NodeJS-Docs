const buf = Buffer.from('hello', 'utf16le');
console.log(buf); // <Buffer 68 00 65 00 6c 00 6c 00 6f 00 >

const uint16arr = new Uint16Array(
    buf.buffer,
    buf.byteOffset,
    buf.length / Uint16Array.BYTES_PER_ELEMENT);

console.log(Uint16Array.BYTES_PER_ELEMENT); // 2

console.log(uint16arr);
// Prints: Uint16Array(5) [ 104, 101, 108, 108, 111 ]