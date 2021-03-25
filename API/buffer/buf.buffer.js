const arrayBuffer = new ArrayBuffer(16);
const buffer = Buffer.from(arrayBuffer);

console.log(buffer.buffer === arrayBuffer);
// Prints: true

console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

console.log(buffer.buffer);
console.log(arrayBuffer);
/*
ArrayBuffer {
[Uint8Contents]: < 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 >,
    byteLength: 16
}
*/