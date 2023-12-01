// Rest Operator / Spread operator.
function calculateCartPrice(...num1) { //Pass any argument
    return num1;
}
console.log(calculateCartPrice(100, 200, 300))

// Pass Object
let usersInfo = {
    username: "Ahsan Shahid",
    phone: "03234578990"
}

function printUsersInfo(usersInfo) {
    return (`Username is ${usersInfo.username} and phone# is ${usersInfo.phone}`)
}
console.log(printUsersInfo(usersInfo))

// Pass Array
let userInfo2 = [
    "Ahsan Shahid",
    "03234578990"
]

function printuserInfo2(userInfo2) {
    return (`Username is ${userInfo2[0]} and phone# is ${userInfo2[1]}`)
}
console.log(printuserInfo2(userInfo2))

