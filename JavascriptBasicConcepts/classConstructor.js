class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    display() {
        return this.name + " age " + this.age;
    }

}

const person = new Person("Mithun",24);

console.log(document.getElementById("header"));
// console.log(person);