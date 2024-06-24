"use srict";

class StringBuilder {
  #value;
  
  constructor(initialValue = '') {
    this.#value = initialValue.toString();
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    return this.#value += str.toString(); 
  }

  padStart(str) {
    return this.#value = str.toString() + this.#value;
  }

  padBoth(str) {
    return this.#value =  str.toString() + this.#value + str.toString();
  }
}


const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue()); 
builder.padBoth("=");
console.log(builder.getValue()); 