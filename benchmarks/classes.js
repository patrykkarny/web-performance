// const a = { a: 1, x: 10 };
// const b = { a: 5000 };

// b.x = 10;

const makeAPoint = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  return new Point(1, 2);
}

const a = makeAPoint();
const b = makeAPoint();

console.log(%HaveSameMap(a, b));
