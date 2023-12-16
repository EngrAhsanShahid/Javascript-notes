//IIFE function Immediate invoked function expression
// We use iife function to ignore any global values and iife functions are calling first at the time of execution
// At the end add ";" to use more than one iife function

// Named iife function
(function iife() {
    console.log("Named iife function")
})();

// Without named function
(() => {
    console.log("UnNamed iife function")
})();

// Pass argument in named iife function
(function iife(getValue) {
    console.log(`${getValue}`)
})("Named iife function");

// Pass argument in un-named iife function
((getValue) => {
    console.log(`${getValue}`)
})("UnNamed iife function");