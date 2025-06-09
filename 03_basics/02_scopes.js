//two main types of scope
//globle scope->in which if we declare something globally we can use it in whole code
//block scope->if we declare something in block then it will only used in that block
let a=40
var c=400
if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
// console.log(c); //c is var

function one(){
    const userName = "vicky"

    function two(){
        const website = "youtube"
        console.log(userName); 
    }
    two()
    
}
// one()

// ******************interesting*************
function addOne(num){
    return num++;
}
addOne(5)

const addTwo = function(num){
    return num+2;
}
addTwo(5)