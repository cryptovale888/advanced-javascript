function testDebugging() {
  let num1 = 10;
  let num2 = 5;

  // Add a breakpoint on the line below to pause execution
  let result = num1 + num2;

  console.log("The result is: " + result);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myProblem(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
  }
  return arr2;
}

console.log(myProblem(arr1));



let arr3 = {22, 33, 44, 55, 66, 77, 88, 99};
function myProblem2(arr) {
  let sum = 0;
  arr3.forEach(item => {
    sum =+ item;
    return sum;
});
}
console.log(myProblem2(arr3));