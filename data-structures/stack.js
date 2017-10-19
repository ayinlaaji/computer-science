/**
 * Name: Stack
 * Push: 0(1) => Constant
 * Pop: 0(1) => Constant
 * Peek: 0(1) => Constant
 * Size: 0(1) => Constant
 * Swap: 0(1) => Constant
 * Space: 0(n) => Linear
 **/

class Stack {
  constructor() {
    this.storage = {};
    this.delimiter = "-";
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size = this.size + 1;
  }

  peek() {
    return this.storage[0];
  }

  pop() {
    if (this.size === 0) return undefined;
    const val = this.storage[this.size - 1];
    this.size = this.size - 1;
    delete this.storage[this.size];
    return val;
  }

  length() {
    return this.size;
  }
}

const stack = new Stack();

stack.push("one");
stack.push("two");
stack.push("three");
stack.push("four");

console.log("Popped: ", stack.pop(), "=====> Left in stack: ", stack.length());
console.log("Popped: ", stack.pop(), "=====> Left in stack: ", stack.length());
console.log("Popped: ", stack.pop(), "=====> Left in stack: ", stack.length());
console.log("Popped: ", stack.pop(), "=====> Left in stack: ", stack.length());
