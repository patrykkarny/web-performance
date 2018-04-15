const { performance } = require('perf_hooks');

// SETUP 🏁

// let iterations = 1e7;
let iterations = 100000;

const objects = [{ a: 1, b: 4 }, { a: 2, c: 5, b: 10 }, { a: 3 }, { a: 4, b: 2 }];

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  let sum = 0;
  const obj = objects[iterations & 3];
  sum = sum + obj.a;
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);

// node benchmarks/benchmark.js
// node --trace-opt benchmarks/benchmark.js | grep add
// node --trace-opt --trace-deopt benchmarks/benchmark.js | grep add
// node --allow-natives-syntax benchmarks/benchmark.js