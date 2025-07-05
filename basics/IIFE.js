//Immediately Invoked Function Expression (IIFE)
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();
//global scope er pollution dur korar  jonno use kora hoy

( (name) =>{

    console.log(`DB CONNECTED TWO ${name}`)
}  )('Arani')
