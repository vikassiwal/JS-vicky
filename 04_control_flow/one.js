//control flow

//if
if(true){ //condition true hogi tbhi scope ka code run hoga
    
}
// <,>,=<,>=.!=,===

if(2=="2"){
    console.log("executed");
}
if(2==="2"){
    console.log("executed");
}

const score=200
// if(score>100){
//     const power="fly";
//     console.log(`user power : ${power}`);  
// }

const balance=1000
// if(balance>500) console.log("test");

const userLoggedIn=true;
const debitCard=true;
// if(userLoggedIn && debitCard){
//     console.log("allow to buy course");   
// }


//Switch
const month=3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        
        break;
}