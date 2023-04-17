

// ------------ 👎😡 Example 1.1 bad approach ------------
class RectangleB {
  constructor(public width: number, public height: number) {}

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  areaOf(): number {
    return this.width * this.height;
  }
};

class SquareB extends RectangleB {
  width: number = 0;
  height: number = 0;

  constructor(size: number) {
    super(size, size);
  }

  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }
};


// ------------ 👍😊 Example 1.2 good approach ------------
interface Figure {
  setWidth(width: number): void;
  setHeight(height: number): void;
  areaOf(): void;
}

class Rectangle implements Figure {
  setWidth(width: number) { }
  setHeight(height: number) { }
  areaOf() { }
}

class Square implements Figure {
  setWidth(width: number) { }
  setHeight(height: number) { }
  areaOf() { }
}
