
//******************Primitive Data types******************/

// 7 types : String, number, boolean , null, symbol, undefined, bigint


const score = "100"
const scoreValue = 100.3

const IsLoggedIn = false
const OutsideTemp = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 13456646464646n


//******************** Reference type/ Non-Prmitive*******************/

// 3 types : Array, objects, functions

const heroes = ["Shaktimaan", "Aryamaan", "Junio-G"]

let myObj = {
    name : "Himanshu",
    age : 22
}

const myfunction = function(){
    console.log("Hello World");
    
}

console.log(typeof(score));



// https://262.ecma-international.org/5.1/#sec-11.4.3