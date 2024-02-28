const person1 = {
    firstName: "Spongebob", //-> properties
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    eat: () => console.log("Krabby Patty"), //-> methods(functions inside objects) 
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 35,
    isEmployed: false,
    eat: () => console.log("Pizza"),
    hello: () => console.log("Hey, I'm Patrick"),
}

person1.eat();
console.log(person1.age);
person2.hello();

