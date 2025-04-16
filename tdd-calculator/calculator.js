class Calculator {
  constructor() {
    this.value = 0;
  }

  getCurrentState() {
    return this.value;
  }

  addInputs(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    this.value = sum;
    return sum;
  }

  subtractInputs(...nums) {
    if (nums.length === 0) return 0;
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
      result -= nums[i];
    }
    return result;
  }

  multiplyInputs(...nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
    return product;
  }

  divideInputs(...nums) {
    if (nums.length === 0) return undefined;
    let quotient = nums[0];
    for (let i = 1; i < nums.length; i++) {
      quotient /= nums[i];
    }
    return quotient;
  }


  toPower(base, exponent) {
    return Math.pow(base, exponent);
  }


  squareRoot(num) {
    let root = Math.sqrt(num);
    if (Number.isInteger(root)) {
      return root;
    } else {
      return parseFloat(root.toFixed(2));
    }
  }


  clearCurrentStatus() {
    this.value = 0;
    return true;
  }


  negPosReversal(num) {
    return -num;
  }
}

module.exports = Calculator;