const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai ={
    name:"ginger chai",
    price:20,
    isAvailable:true, 

    orderchai: function(){
        console.log("code fat gya");
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// chai.name="no sugar chai"
// console.log(chai.name);

// Object.defineProperty(chai,"name",{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name="ghar wali chai"
// console.log(chai.name);


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    //agr object ki enummerable ko false kr denge to iterate nhi kr payenge
    // mtlb hm object ko iterate krne se rok skte h if we want 
}