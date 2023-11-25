function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.displayInfo = function () {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
};

function FourWheeler(make, model, numDoors) {
    Vehicle.call(this, make, model);

    this.numDoors = numDoors;
}

FourWheeler.prototype = Object.create(Vehicle.prototype);

FourWheeler.prototype.displayDoors = function () {
    console.log(`Number of doors: ${this.numDoors}`);
};

const car = new FourWheeler('Toyota', 'Camry', 4);

car.displayInfo();  // Output: Make: Toyota, Model: Camry
car.displayDoors(); // Output: Number of doors: 4
