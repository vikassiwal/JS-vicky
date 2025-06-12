//this current context ko refer krta h
const user={
    username:"vicky",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage() 

// console.log(this);

// function chai(){
//     let userName="vicky"
//     console.log(this.userName);
    
// }
// chai()

const chai1 = function(){
    let userName="vicky"
    console.log(this);
}
// chai1()

const chai = ()=>{
    let userName="vicky"
    console.log(this);
}
// chai()

//()=>
const addTwo = (num1,num2)=>{
    return num1+num2;
}
const addTwo2 = (num1,num2)=>  num1+num2;
    

// console.log(addTwo(3,4));

