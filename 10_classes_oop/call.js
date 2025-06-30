

function setUserName(username){
    this.username=username
}
function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email
    this.password=password

}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);

// call(this, ...) is used to borrow a function and 
// run it in the context of another object.

// It makes sure that "this" inside the borrowed function 
// refers to the current object.