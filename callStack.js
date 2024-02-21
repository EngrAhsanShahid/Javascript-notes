// Javascript Execution Context
// Global phase
// Function Phase

// 1. Memory Creation Phase
// 2. Executional Phase

let var1 = 10;
let var2 = 20;
function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(var1, var2)
let result2 = addNum(5, 10)
console.log("result1=>", result1)
console.log("result2=>", result2)

// In chrome source -> snippets -> You can write code like callStack.js file and inside the file you can check call stack and everything.
// Call stack works in LIFO method.