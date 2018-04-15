const { performance } = require('perf_hooks');

// SETUP 🏁

// let iterations = 1e7;
let iterations = 100000;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark('start');

%NeverOptimizeFunction(add);

// EXERCISE 💪

while (iterations--) {
  add(a, b);
}

iterations = 1e7;

add('foo', 'bar');

while (iterations--) {
  add(a, b);
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