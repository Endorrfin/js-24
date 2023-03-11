
// ============ PROXY ============

/*
* Proxy - структурный паттерн, который вместо реальных объектов предоставляет объекты заменители.
* Эти объекты перехватывают вызов к оригиналам и позволяют сделать что-то до или после обращения к оригинальному объекту.
* Это своего рода прослойка, которая позволяет произвести какие-то дополнительные манипуляции, до того, как отдать дальнейший контроль.
* */

// -------------- Example 1.1 --------------

class CarAccess {
  open() {
    console.log('Opening car door');
  }

  close() {
    console.log('Closing the car door');
  }
};


class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Elon';
  }

  close() {
    this.door.close();
  }
};


const door = new SecuritySystem((new CarAccess()));
// door.open('Jack'); // 'Access denied!'
// door.open('Elon'); // 'Opening car door'
// door.close(); // 'Closing the car door'




