function addTwoNumbers(no1,no2){
    // let result = no1+no2;
    // console.log("Arani")
    // return result;
    //console.log("Arani")//not print
    return no1+no2;
}
const result = addTwoNumbers(3,5)
// console.log("result:",result)

function loginusermessage(username = "Sam") {
    if(!undefined){
            console.log("Please enter a username");
            return
    }
    return `${username} just loggedIn`;
}
//console.log(loginusermessage("Arani"));
// console.log(loginusermessage());

function calculateCartPrice(val1,val2,...num1){
    return num1

}
//console.log(calculateCartPrice(200, 400,500))
const user = {
    username: "Arani",
    prices: 199
}
function handleobject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handobject(user)
handleobject({
    username:"Arani",
    price: 399
})
const myNewArray= [200,400,500,100]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));