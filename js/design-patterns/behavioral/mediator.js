
// ============ MEDIATOR ============

/*
* Mediator (посредник) - это поведенческий паттерн, который позволяет уменьшить взаимосвязь классов между собой вынося межклассовые связи в так называемый класс посредник.
* Это позволяет инкапсулировать специфическую логику и переиспользовать компоненты.
* * */

// -------------- Example 1.1 block I --------------
class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    // console.log(`Order name: ${name}. Order auto is ${auto}`);
    // console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }

};

// -------------- Example 1.1 block II --------------
class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}


// -------------- Example 1.1 block III How it works --------------
const mediator = new OfficialDealer();

const edvard = new Customer('Edvard', mediator);
const roy = new Customer('Roy', mediator);

edvard.makeOrder('Tesla', 'With autopilot');
// Order name: Edvard. Order auto is Tesla
// mediator.js:19 Additional info: With autopilot

roy.makeOrder('Audi', 'With parktronik!');
// Order name: Roy. Order auto is Audi
// mediator.js:19 Additional info: With parktronik!

// console.log(mediator.getCustomerList()); // ['Edvard', 'Roy']
