// PART 1: Making a class for vehicle

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        if (!Number.isFinite(year) || year < 100) {
            throw new Error('please use 4 digits for year')
        }
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);


// PART 2: creat a class for Car that extends Vehicle as its super

class Car extends Vehicle {
    numWheels() {
        return 4;
    }

}

let myFirstCar = new Car("Toyota", "Corolla", 2005);


// PART 3: class for Motorcycle, extending Vehicle again.

class Motorcycle extends Vehicle {
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);


// PART 4:  Garage

class Garage {
    vehicles = [];
    constructor(capacity) {
        this.capacity = capacity;
    }
    add(obj) {
        if (!(obj instanceof Vehicle)) {
            throw new Error("That is not a vehicle!!!")
        }
        if (this.vehicles.length === this.capacity) {
            throw new Error("Sorry, we are full.")
        }
        this.vehicles.push(obj)
    }
}

let garage = new Garage(2);