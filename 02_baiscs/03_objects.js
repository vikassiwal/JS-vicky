//Objects
//singleton->constructor se jb bhi object bnayenge to wo singleton hi bnega
// Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "vicky",
    "full name":"vicky siwal",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"vicky@google.com",
    isLoginDay:false,
    lastLoginDays: ["mon","sat"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vicky@chatgpt.com"
// Object.freeze(jsUser) ///ab is object me koi changes nhi hoga
jsUser.email = "vicky@micro.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


