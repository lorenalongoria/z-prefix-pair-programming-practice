class GalvanizeSet {
  constructor() {
    this.items = [];
  }

  getSize() {
    return this.items.length;
  }

  insert(item) {
    if (!this.contains(item)) {
      this.items.push(item);
    }
  }

  contains(item) {
    return this.items.includes(item);
  }

  delete(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.items.splice(index, 1);
    return true;
  }
}

module.exports = GalvanizeSet;