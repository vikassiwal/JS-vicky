

class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)  ///->yeh super .call(this,....) ka kam khud kr deta h 
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai =new teacher("chai","chai@123.com","123")
chai.addCourse()

const masalTea = new user("masalachai")
masalTea.logme()

console.log(chai instanceof user);
console.log(chai instanceof teacher);
