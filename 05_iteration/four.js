//
const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map( (num)=>num+10)
// console.log(newNums);

//chain
// const newNumbers = myNums.map( (num)=>num*10)
//                     .map( (num)=>num+1)
//                     .filter( (num)=> num>=40)
// console.log(newNumbers);


//reduce
const nums=[1,2,3]

const initialValue=0
// const myTotal = nums.reduce(function(accumulator,curVal){
//     console.log(`acc: ${accumulator} and curVal : ${curVal}`);
    
//     return accumulator+curVal
// },0)

const myTotal = nums.reduce( (acc,curVal)=> acc+curVal,0)
console.log(myTotal);


const shopingCart=[{
    itemNmae: "js course",
    price: 2999
    },
    {
    itemNmae: "python",
    price: 3999
    },
    {
    itemNmae: "DS",
    price: 9999
    },
    {
    itemNmae: "mobile dev",
    price: 999
    },
]
const price2pay = shopingCart.reduce( (acc,item)=> acc+item.price,0)
console.log(price2pay);
