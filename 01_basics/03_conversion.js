let score = "33"

console.log(typeof(score));

let valueInNUmber = Number(score) //string to number conversion
console.log(typeof(valueInNUmber));
console.log(valueInNUmber);

//"33"->33
//"33abc"->NaN(not a number)
//"true"->1; 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1->true; 0->false
//""->false
//"vicky"->true

let num= 35
let stringNumber=String(num);
console.log(stringNumber);
console.log(typeof(stringNumber));

//**********Operations*********** */
let value=3;
let negValue=-value
// console.log(negValue);

// console.log(2**3);
// console.log(2*3);
// console.log(2%3);

let str1="hello"
let str2= " vicky"

let str3= str1+str2
// console.log(str3);

console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2 //ese readability achhi nhi lgti

// jyada gyan ke loiye niche wali link pr jaye
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



// comparisions
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null==0);
console.log(null>=0); 
console.log(null>0);
//the reason is that an equality check == and comparisions
// ><>=<= work differently
// comparisions convert null to a number , treating it 
// as 0. that's why (2)>= is true and (1)> is false

console.log(undefined==0);
// avoid these null and undefined type conversions

// ===    ->strict check
console.log(2===2);
console.log("2"===2);






