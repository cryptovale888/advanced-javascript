function testDebugging() {
  let num1 = 10;
  let num2 = 5;

  // Add a breakpoint on the line below to pause execution
  let result = num1 + num2;

  console.log("The result is: " + result);
}


let myResult = [];
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myProblem(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
  }
  return arr2; // trebuie pus return la final, pentru a avea stocat rezultatul intr-o variabila ce poate apoi fi folosita si in afara functiei cu rezultatul in ea / daca folosesti return rezultatul functiei poate fi incarcat intr-un alt parametru;
  
}

myResult = myProblem(arr1);
console.log(myResult); 
