//objects2

const tinderUser =new Object() //->singleton obj
// const tinderUser = {}

tinderUser.id = "123bc"
tinderUser.name = "samm"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email:"some@gamil.com",
    fullname : {
        userfullname:{
            firstname:"vicky",
            lastname:"siwal"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const target = { a: 1, b: 2 };
const source = { b: 4, d: 5 };
const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true

const obj3 = {...target,...source}
// console.log(obj3);

const users = [
    {
        id:1,
        email : "v.gmail.com"
    },
    {
        id : 2,
        email : "v1.gmail.com"
    },
    {
        id:3,
        email:"v2.gmail.com"
    },
]
// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
