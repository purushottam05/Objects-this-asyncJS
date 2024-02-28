// methods -> obj
// function -> global 

// const rem =  {
//     num: 6,
//     str: "hello",
//     play() {
//         console.log(this);
//     },
//     fun: () => console.log(this),
// }

// rem.play();
// rem.fun();




// const regularFunc = function() {
    
//     console.log(this);
//   };
  
//   const obj = {
//     age: 45,
//     method: regularFunc
//   };

//  obj.method();

 //arrow fn

//  const arrowFunc = () => {
//     console.log(this);
//   };
  
//   const obj2 = {
//     age: 60,
//     method: arrowFunc
//   };
  
//   obj2.method();



  //call()

  const objj = {
    name: 'John',
    greet: function() {
      return `Hello, ${this.name}!`;
    }
  };
  
  const obj4 = {
    name: 'Alice'
  };
  
  const greeting = objj.greet.call(obj4);
  console.log(greeting);

 // apply()

 function greet(name) {
    return `Hello, ${name}! I'm ${this.name}.`;
  }
  
  const person = {
    name: 'John'
  };
  
  console.log(greet.apply(person, ['Alice'])); 

  //bind()

  function greet(name) {
    return `Hello, ${name}! I'm ${this.name}.`;
  }
  
  const personn = {
    name: 'John'
  };
  
  const greetJohn = greet.bind(personn);
  console.log(greetJohn('Alice')); 
  
  

  