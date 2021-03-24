const buf = Buffer.from([1, 2, 3]);

for (const b of buf) {
    console.log(b);
}
// Prints:
//   1
//   2
//   3

// This methods can be used to create iterators.
console.log(...buf.values()); // 1 2 3
console.log(...buf.keys()); // 0 1 2
console.log(...buf.entries()); // [0, 1][1, 2][2, 3]