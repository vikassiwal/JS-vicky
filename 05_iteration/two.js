//for of

const arr=[10,20,3,4,5]
for (const num of arr) {
    // console.log(num);   
}
const greeting="hello world"
for (const greet of greeting) {
    // console.log(greet);   
}

//Maps
const map=new Map()
map.set('IN',"INDIA")
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('fr',"france")
console.log(map);

// for (const [key,val] of map) {
//     console.log(key,':-',val);
    
// }

// const myObject = {
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swiftbyApple"
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }
// for (const key in arr) {
//     console.log(arr[key]);
    
// }
//for each
const coding =["js","ruby","java","python"]
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// })

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log((item,index,arr));
    
// })

const myCoding = [
    {
        lanuageName:"js",
        languageFileName:"jsFile"
    },
    {
        lanuageName:"java",
        languageFileName:"javaFile"
    },
    {
        lanuageName:"python",
        languageFileName:"pythonFile"
    },
]
myCoding.forEach( (item)=>{
    console.log(item.lanuageName);
})