const { performance } = require('perf_hooks');

// SETUP 🏁

// let iterations = 1e7;
let iterations = 100000;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const test = () => {
  // class Point {
  //   constructor(x, y) {
  //     this.x = x;
  //     this.y = y;
  //   }
  // }

  const add = point => point.x + point.y;

  const point = new Point(10, 20);

  add(point);
};

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  test();
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