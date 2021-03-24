// Buffer.from() behaves like new Uint8Array()

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

console.log(arr); // Uint16Array(2) [ 5000, 4000 ]
console.log(arr.buffer) // ArrayBuffer { [Uint8Contents]: <88 13 a0 0f>, byteLength: 4 }

// Copies the contents of `arr`.
const buf1 = Buffer.from(arr);

// Shares memory with `arr`.
const buf2 = Buffer.from(arr.buffer);

console.log(buf1);
// Prints: <Buffer 88 a0>
console.log(buf2);
// Prints: <Buffer 88 13 a0 0f>

arr[0] = 6000;
arr[1] = 6000;

console.log(buf1);
// Prints: <Buffer 88 a0>
console.log(buf2);
// Prints: <Buffer 88 13 70 17>



// - - - - -

const arr3 = new Uint16Array(20);
console.log(arr3)
/*
Print: Uint16Array(20)[
0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0
] */

// Buffer.from(arrayBuffer[, byteOffset[, length]])
const buf3 = Buffer.from(arr3.buffer, 0, 10);

console.log(buf3.length);
// Prints: 16