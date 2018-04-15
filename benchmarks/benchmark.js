const { performance } = require('perf_hooks');

// SETUP 🏁

// let iterations = 1e7;
let iterations = 100000;

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  const point = new Point(2, 4, 6);

  // delete point.x;
  delete point.z;

  JSON.stringify(point);
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