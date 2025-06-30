// do chatgpt->  is js consist oops?
// 
// const user={
//     username:"vicky",
//     logincnt:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("got user details from bb");
//         console.log(this);
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

const dateOne = new Date()
// yeh "new" ek constructor function h yeh allow krta h
// ki aap ek object se multiple instances bna sko

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
// console.log(userTwo);

// jb bhi "new" keyword use kroge to 
// 1. ek empty object create hota h jisko instance bola jata h
// 2. ek constructor function call hota h jo argument wgera ko pack krta h or apko de deta h


