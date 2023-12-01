// You can access a function which is not hold by the variable.
console.log(one(5))
function one(num1) {
    return num1 + 1;
}



// Also called function expression
const two = function (num1) {
    return num1 + 2;
}
console.log(two(5))