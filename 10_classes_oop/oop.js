// do chatgpt->  is js consist oops?
// 
// const user={
//     username:"vicky",
//     logincnt:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("got user details from db");
//         console.log(this);
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

const dateOne = new Date()
// yeh"new" allow krta h
// ki aap ek object se multiple instances bna sko
// create a new empty object

function user(username,logincount,isLoggedIn){
    this.username= username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
// const userOne=user("vicky",12,true)
// const userTwo=  user("chai aur code",11,false)
// console.log(userOne);
// ->ab "new" constructor function use krke dekho



const userOne=new user("vicky",12,true)
const userTwo= new user("chai aur code",11,false)
console.log(userOne.constructor);
console.log(userTwo);

// jb bhi "new" keyword use kroge to 
// 1. ek empty object create hota h jisko instance bola jata h
// 2. The newly created object is automatically linked to the prototype of the constructor function.
//3. The constructor function is called, and inside it, this refers to the new object.
//4.  If the constructor doesn’t return an object explicitly, JavaScript returns the newly created object by default.


