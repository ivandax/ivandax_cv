export class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  validateItem(item) {
    if (item === null || item === undefined) {
      throw new Error("Item cannot be null or undefined");
    }
  }

  preventIfEmpty() {
    if (this.size === 0) {
      throw new Error("Error: Deque is empty");
    }
  }

  addLast(item) {
    this.validateItem(item);
    const oldLast = this.last;
    this.last = {
      item: item,
      next: null,
      previous: oldLast,
    };
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
    this.size++;
  }

  addFirst(item) {
    this.validateItem(item);
    const oldFirst = this.first;
    this.first = {
      item: item,
      next: oldFirst,
      previous: null,
    };
    if (this.isEmpty()) {
      this.last = this.first;
    } else {
      oldFirst.previous = this.first;
    }
    this.size++;
    console.log(this.toArray());
  }

  removeFirst() {
    this.preventIfEmpty();
    const item = this.first.item;
    this.first = this.first.next;
    this.size--;
    if (this.isEmpty()) {
      this.last = null;
    } else if (this.first !== null) {
      this.first.previous = null;
    }
    return item;
  }

  removeLast() {
    this.preventIfEmpty();
    const item = this.last.item;
    this.last = this.last.previous;
    this.size--;
    if (this.isEmpty()) {
      this.first = null;
    } else if (this.last !== null) {
      this.last.next = null;
    }
    return item;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  toArray() {
    if (this.first === null) {
      return [];
    }
    const array = [];
    let current = this.first;
    while (current !== null) {
      array.push(current.item);
      current = current.next;
    }
    return array;
  }
}
