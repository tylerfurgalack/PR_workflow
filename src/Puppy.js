class Puppy {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    return `${this.name} says 'arf'`;
  }

  about() {
    return `${this.name} is just a lil pup. He's a ${this.breed}`;
  }
}

export default Puppy;
