//for
for(let ind=0;ind<5;ind++){
    // console.log(ind); 
}

let myArray=["flash","batman","superman"];;
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

//break and continue

// for (let index = 1; index <=10; index++) {
//     if (index==5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }
for (let index = 1; index <=10; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`);
}

// While loop
let index=0;
while (index<10) {
    console.log(`value of index is ${index}`);
    index+=3;
    
}
//do while

let score=1;
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=4);