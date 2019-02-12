// Teach snoopy and scoobydoo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

class Dog {
  constructor(breed) {
    this.breed = breed;
  }
  bark() {
    return 'Woof';
  }
}

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
snoopy.bark();
scoobydoo.bark();