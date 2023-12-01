// In closure child scope can access top level but top level can not access to the child scope. 
function one() {
    let name = "Ahsan Shahid";
    function two() {
        let phone = "03423456778";
        console.log(`Name is ${name} and phone: is ${phone}`)
    }
    // console.log(`phone: ${phone}`)
    two()
}
one()