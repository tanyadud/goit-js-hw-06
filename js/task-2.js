"use srict";

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
    
  }

  removeItem(itemToRemove) {
     const item = this.#items.indexOf(itemToRemove);
      if (item !== -1) {
        this.#items.splice(item, 1);
      }
  }
  
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems()); 