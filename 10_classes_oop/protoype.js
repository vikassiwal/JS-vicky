// let myName= "Vicky    "
// console.log(myName.trueLength);

let myHera = ["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`sipdy power is ${this.spiderman}`); 
    }
}

Object.prototype.vicky = function(){
    console.log(`vicky is present in all objects`);
    
}
Array.prototype.heyVicky = function(){
    console.log(`vicky says hello to reet onlyy`);
    
}

heroPower.vicky()
myHera.vicky()

myHera.heyVicky()
// heroPower.heyVicky() ->give error

// inheritance
const user={
    name:"chai"
}
const teacher ={
    makeVideo: true
}
const teachingSupport ={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: teachingSupport //->kisi or ki properties ko ese inheritance kr skte ho

}

teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUserName = "chai aur code     "
String.prototype.trueLength = function(){
    
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
    
    
}
anotherUserName.trueLength()
"vikcy".trueLength()
"iceTea  ".trueLength()