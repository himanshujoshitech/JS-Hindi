const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //100 is converted into string by .toString()
console.log(balance.toFixed(2)); //for precision value upto 2 only after decimal

const otherNumber = 234.8956
console.log(otherNumber.toPrecision(4)); //234.9 (output)


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); //1,00,000 (output)




/***************************************** Math ***************************************/


// console.log(Math);
// console.log(Math.abs(-4)); // absolute value means only negative value converts into positive value

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // 5 (output) mtlb jara bhi 4 se jaada toh 5 ho jaaega kyuki ceiling mtlb top
// console.log(Math.floor(4.2)); //4 (output) mtlb niche waale value
// console.log(Math.min(4,5,9,1)); //1 (output) shows the minimum value

console.log(Math.random()); // value will always comes in between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // ab minimum value 1 toh aaege kyuki pehle 0.001 bhi aa skte thei aur usme agar *10 krte tb bhi 1 nhi aata isliye + 1 kiya and floor to remove point

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);









