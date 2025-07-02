// ✅ 1. Class-based getter and setter
class user {
    constructor(email, password) {
        // Calls the setters
        this.email = email;
        this.password = password;
    }

    // Getter for email - returns uppercase
    get email() {
        return this._email.toUpperCase();
    }

    // Setter for email
    set email(value) {
        this._email = value;
    }

    // Getter for password - returns uppercase
    get password() {
        return this._password.toUpperCase();
    }

    // Setter for password
    set password(value) {
        this._password = value;
    }
}

const vicky = new user("vicky@gmail.com", "abc");
console.log(vicky.password); // "ABC"
console.log(vicky.email);    // "VICKY@GMAIL.COM"

// ✅ 2. Constructor Function with Object.defineProperty
function user2(email, password) {
    this._email = email;
    this._password = password;

    // Defining getter and setter using defineProperty
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
}

const chai = new user2("chai@chai.com", "xyz");
console.log(chai.email); // "CHAI@CHAI.COM"

// ✅ 3. Object literal with getter and setter
const user3 = {
    _email: "h@hc.com",
    _password: "bnv",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

console.log(user3.email); // "H@HC.COM"

// ✅ 4. Object.create based inheritance
const tea = Object.create(user3); // tea inherits from user3
console.log(tea.email); // "H@HC.COM"



class User {
    constructor(email) {
        this._email = email;
    }
    // Logs access
    get email() {
        console.log("Email was accessed");
        return this._email;
    }
    // Logs change
    set email(value) {
        console.log("Email was changed to:", value);
        this._email = value;
    }
}

const user4 = new User("old@example.com");

// Accessing email
console.log(user4.email);  

// Changing email
user4.email = "new@example.com"; 


/*
getters and setters in JavaScript are used to control access to object properties.
 A getter (get) lets you define how a property value is returned, while a setter (set) allows you to define how it is set.
1.They help in encapsulation by protecting direct access to internal variables.
2.Useful for adding validation or formatting logic while getting or setting values.
3.Help in maintaining consistent data, like converting input to uppercase or ensuring correct types.
4.They make computed properties possible (e.g., fullName from firstName and lastName).
5.You can also use them for logging or triggering side effects when values are accessed or changed.*/
