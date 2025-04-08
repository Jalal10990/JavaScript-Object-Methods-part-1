// create target object
const person1 = {
    firstName: "Shah",
    lastName: "Jalal",
    age: 19,
    eyeColor: "brown"
};

// create source object
const person2 = {
    firstName: "Shoaib",
    lastName: "Riaz"
};

// Assign source to target
Object.assign(person1, person2);

// display target
let text = Object.entries(person1);
document.getElementById("demo").innerHTML = text;


const fruits = { Bananas:300, Oranges:200, Apples:500}; 

const myMap = new
Map(Object.entries(fruits));
// let text2 = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ": " + amount + "<br>";
// }
document.getElementById("demo2").innerHTML = myMap;


const fruits2 = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];
    
    const myObj = Object.fromEntries(fruits2);
    document.getElementById("demo3").innerHTML = myObj.pears;


const person3 = {
    firstName: "Azeem",
    lastName: "Nawaz",
    age: 19,
    eyeColor: "blue"
};

let text3 = 
Object.values(person3)
document.getElementById("demo4").innerHTML = text;

//create an array
// Create an Array
const fruits4 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to select low volumes 
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by ok and low
  const result = Object.groupBy(fruits, myCallback);
  
  // Display Results
  let text4 ="These fruits are Ok: <br>";
  for (let [x,y] of result.ok.entries()) {
    text += y.name + " " + y.quantity + "<br>";
  }
  
  text += "<br>These fruits are low: <br>";
  for (let [x,y] of result.low.entries()) {
    text += y.name + " " + y.quantity + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;
    
  


