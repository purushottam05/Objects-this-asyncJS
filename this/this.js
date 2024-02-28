// methods -> obj
// function -> global 

const rem =  {
    num: 6,
    str: "hello",
    play() {
        console.log(this);
    },
    fun: () => console.log(this),
}

rem.play();
rem.fun();


const regularFunc = function() {
    
    console.log(this);
  };
  
  const obj = {
    age: 45,
    method: regularFunc
  };

 obj.method();

 //arrow fn

 const arrowFunc = () => {
    console.log(this);
  };
  
  const obj2 = {
    age: 60,
    method: arrowFunc
  };
  
  obj2.method();