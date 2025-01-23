//object literals

const mySym = Symbol("key1");
const JsUser ={
    name : "Himanshu",
    "full name" : "Himanshu Joshi",
    [mySym] : "mykey1",
    age : 24,
    location : "Jaipur",
    email : "himanshu@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);  //ways to access object
console.log(JsUser["email"]); //ways to access object

console.log(JsUser["full name"]);  // to access full name we have to use this method
console.log(JsUser[mySym]); 

JsUser.email ="Himanshu@chatgpt.com"
// Object.freeze(JsUser)  //Now value will not change of JsUser
JsUser.email ="himanshu@microsoft.com"
console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



