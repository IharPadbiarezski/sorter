class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = function(left, right) {
      return left - right;
    };
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    var arr = [];
    for (var i = 0; i < indices.length; i++) {
      arr.push(this.array[indices[i]]);
    }
    if (indices[1] - indices[0] >= 1) {
      arr.sort(this.comparator);
    }
    if (indices[1] - indices[0] <= -1) {
      arr.sort(this.comparator).reverse();
    }

    for (i = 0; i < indices.length; i++) {
      this.array[indices[i]] = arr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }

}

module.exports = Sorter;
