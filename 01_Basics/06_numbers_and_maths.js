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







