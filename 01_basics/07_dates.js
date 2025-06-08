//Dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 5,8,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());
 
let myDate2 = new Date("01-14-2023")
console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //this will print 1749360610836 big value becoz it cnt time in ili second from 1 jan 1970

// console.log(myDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));

//exercise: calculate hours between dinesh's bday and 08june 2025
let today = new Date("2025-06-08");    // YYYY-MM-DD format
let bday = new Date("2001-08-01");

const ans1 = today.getTime() / (1000 * 60 * 60);
const ans2 = bday.getTime() / (1000 * 60 * 60);

console.log(ans1 - ans2);  // hours between birthday and today

