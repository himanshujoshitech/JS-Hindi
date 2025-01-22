// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

const myHeros = ["shaktimaan", "junior-g", "aryamaan"]

const myArr2 = new Array(1,2,3,4)


/******************************Array Methods ****************************/
// myArr.push(6)       // put the value at the end of the array
// myArr.push(7)
// myArr.pop()         // removes the last value of an array


myArr.unshift(9)    // inserts the value at first

myArr.shift()    // removes the value from the first

// console.log(myArr.includes(9)); // false (output) inspect that value is present in the array or not and gives boolean value
// console.log(myArr.indexOf(3));  // 3 is at which index in myArr Array

// const newArr = myArr.join() // it joins the array but in the string form


// console.log(myArr);
// console.log(newArr);




/*******************Slice, splice*******************/

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log( "C", myArr);   

//In Slice firstly it doesn't take the last range value and it does not change the actual array
// But in Slipe it takes the range value as well as it changes the actual array or it removes the splice range from the actual array











