//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof(myDate));


let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))  // Converts milliseconds into seconds by dividing 1000

let newDate = new Date();

newDate.toLocaleString('default', {
    weekday : "long"
})

