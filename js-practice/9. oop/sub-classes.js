document.querySelector('title').innerHTML="SubClasses";

// SubClasses
// Inheritence

class Person{
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person{
    constructor(fname, lname, phone, memberShip){
        super(fname, lname);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname(){
        console.log(this.firstname, this.lastname);
    }
}
let customer = new Customer('john', 'doe', '123456', '223');
customer.fullname();