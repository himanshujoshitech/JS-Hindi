const name = "himanshu"
const repoCount = 50

// console.log(name + repoCount + " Value");  // not recommended to write this


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //backticks it means stringinterpolanation or it makes placeholders

const gameName = new String('himanshu-hj')


// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));      // these all are methods to access the certain value
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4) //will print 4 characters
console.log(newString);

const anotherString = gameName.slice (1, 5); // in slice we can use negative value
console.log(anotherString);

const newStringone = "    himanshu    "
console.log(newStringone);
console.log(newStringone.trim());  //trim method is used to remove the extra space as you can see above

const url = "https://262.ecma-international.org/5.1/#sec-11.4.3"
console.log(url.replace ('262', '-'))  // you can replace the value- first dash mei _what_to_replace and second dash mei - what you want in that place
console.log(url.includes('eyma')) // to check url contains that string or not

console.log(gameName.split('-'));


const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


console.log(str1.concat(' ', str2));
