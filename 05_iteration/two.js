//for of

const arr=[1,2,3,4,5]
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

for (const [key,val] of map) {
    console.log(key,':-',val);
    
}
