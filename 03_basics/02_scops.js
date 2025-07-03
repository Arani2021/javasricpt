//avoid var
//var c = 300
let a = 300// Global scope
if(true){
    let a = 10// Local scope
    const b =20// Local scope 
    //var c = 30
    console.log("INNER",a);
}

console.log(a)
//console.log(b)
// console.log(c)