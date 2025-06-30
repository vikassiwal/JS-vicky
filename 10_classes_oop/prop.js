class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username ${this.username}`);
        
    }

    static createId(){
        console.log(`123`);
        
    }
}
const vicky=new user("vicky")
// vicky.createId()

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher("iphone","i@phone.com")
console.log(iphone.logme());
