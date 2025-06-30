//prototypes

// js ka prototypal behaviour h
// classes, new, this yeh sare protoype se hi mile h


function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    console.log(this.name + " says Woof!");
};

const dog1 = new Dog("Bruno");
const dog2 = new Dog("Max");

dog1.bark(); // Bruno says Woof!
dog2.bark(); // Max says Woof!
//  Only one bark() function exists in memory — used by all dogs!


function createUser(userName,score){
    this.userName=userName
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`); //kiska score->jisne bulaya->this
    
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript empty object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
