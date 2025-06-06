// data ko kis tarah memory me rakha jata h 
// or kis tarah us data ko access kiya jata h us basis pr 
// data types ko categories kiya gya h
// Primitive ->7 and Non Primitive
// Primitive ->7 types: string,number ,boolean,null, undefined,symbol,BigInt


const score = 100
const isLoggedIn = false;
const data=null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber =32481581794021132n

// Non Primitive or reference type
// arrays, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "vicky",
    age: 22,
}

const myFunction = function(){
    console.log("hi");
    
}

console.log(typeof data);
console.log(typeof myFunction);
console.log(typeof bigNumber);



// | Variable / Value              | Data Type (Category)         | `typeof` result      |
// | ----------------------------- | ---------------------------- | -------------------- |
// | `const score = 100`           | **Number (Primitive)**       | `"number"`           |
// | `const isLoggedIn = false`    | **Boolean (Primitive)**      | `"boolean"`          |
// | `const data = null`           | **Null (Primitive)**         | `"object"` ✅ *(bug)* |
// | `let userEmail;`              | **Undefined (Primitive)**    | `"undefined"`        |
// | `Symbol('123')`               | **Symbol (Primitive)**       | `"symbol"`           |
// | `BigInt value` (like `3248n`) | **BigInt (Primitive)**       | `"bigint"`           |
// | `heros = [ ... ]`             | **Array (Non-Primitive)**    | `"object"` ✅         |
// | `myObj = { ... }`             | **Object (Non-Primitive)**   | `"object"`           |
// | `myFunction = function(){}`   | **Function (Non-Primitive)** | `"function"` ✅       |



//********MEMORY********** */
//Stack  and Heap
//stack use hoti h primitive types me and non primitive me heap memory use hoti h

let myYoutubeName="vickychoudhary"

let anotherName=myYoutubeName
anotherName = 'hahhaha'
console.log(anotherName);
console.log(myYoutubeName);

//object
let user1={
    email:"user@gamil.com",
    upi:"user@ybl"

}
let user2=user1
user2.email="vicky@gmail.com"
console.log(user1.email);
console.log(user2.email);

//stack me primitive data types jate h to jb bhi hm access krte h
// to hme uski copy milti h jbki heap me (non primitive)
// references milta h to heap me kuch change krte h to 
// original me bhi changes honge