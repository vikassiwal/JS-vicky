//
// function add(number1,number2){
//     console.log(number1+number2);
// }


function add(number1,number2){
    // let result1 =number1+number2
    // return result1
    return number1+number2;
}
// const result= add(2,3)
// console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("vicky"));

function calculateCartPrice(val1,val2,...num1){ //...->rest operator
    return num1;
}
// console.log(calculateCartPrice(200,400,600,2000,100));

const user={
    userName:"vicky",
    price:199
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.userName} and price is 
    ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    userName:"sam",
    price:399
})