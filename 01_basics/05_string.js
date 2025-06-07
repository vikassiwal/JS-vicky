const name="vicky"
const repocnt=30
console.log(name+repocnt+" value"); ///yeh syntax achha nhi lgta

//string interpolation->yeh modern way h jo achha h
console.log(`hello my name is ${name} and my repo cnt is ${repocnt}`);

const gameName = new String('vicky-hc-hb')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,5)
console.log(anotherString);

const newStringOne = "   hello  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vicky.com/vicky%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('acha'));

console.log(gameName.split('-'));







