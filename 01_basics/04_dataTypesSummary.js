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

