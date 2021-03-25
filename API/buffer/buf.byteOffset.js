// Create a buffer smaller than `Buffer.poolSize`.
const nodeBuffer = new Buffer.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// When casting the Node.js Buffer to an Int8Array, use the byteOffset
// to refer only to the part of `nodeBuffer.buffer` that contains the memory
// for `nodeBuffer`.
let int8Array = new Int8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.length);
console.log('nodeBuffer : -', nodeBuffer);
console.log('int8Array : -', int8Array);

console.log('nodeBuffer.buffer : - ', nodeBuffer.buffer);
console.log('nodeBuffer.byteOffset : - ', nodeBuffer.byteOffset);
console.log('nodeBuffer.length : - ', nodeBuffer.length);