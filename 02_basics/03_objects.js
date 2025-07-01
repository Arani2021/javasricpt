//singleton

//object literals


const mySymbol = Symbol("key1")
const jsuser ={
    name: "Arani",
    "full name":"Arani Dasguota",
    [mySymbol]: "myKey1", 
    age: 20,
    location:"Kolkata",
    email:"arani@yahoo.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySymbol])


jsuser.email = "arani@gmail.com"
//Object.freeze(jsuser)
jsuser.email = "arani@hotmail.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingtwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())