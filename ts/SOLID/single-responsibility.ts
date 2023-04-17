

// ------------ 👎😡 Example 1.1 bad approach ------------
class AutoB {
  constructor(model: string) { }
  getCarModel() { }
  saveCustomerOrder(o: AutoB) { }
  setCarModel() { }
  getCustomerOrder(id: string) { }
  removeCustomerOrder(id: string) { }
  updateCarSet(set: object) { }
}



// ------------ 👍😊 Example 1.2 good approach ------------

class AutoG {
  constructor(model: string) { }
  getCarModel() { }
  setCarModel() { }
}

class CustomerAuto {
  saveCustomerOrder(o: AutoG) { }
  getCustomerOrder(id: string) { }
  removeCustomerOrder(id: string) { }
}

class AutoDB {
  updateCarSet(set: object) { }
}
