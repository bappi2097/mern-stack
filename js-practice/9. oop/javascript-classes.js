document.querySelector('title').innerHTML="JavaScript Classes";
// class(ES6)
// class is a template for creating a object
/**
let person1 = {
    firstname: 'bappi',
    lastname: 'saha',
    dob: '20-11-1998',
    fullname: function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

let person2 = {
    firstname: 'john',
    lastname: 'doe',
    dob: '20-11-1998',
    fullname: function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

console.log(person1);
person1.fullname();
person2.fullname();

*/

class Person{
    constructor( fname, lname, dob="1970"){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = dob;
    }
    calculateAge(){
        let date = new Date(this.dob);
        let age = new Date(Date.now()-date.getTime());
        return Math.abs(age.getUTCFullYear()-1970);
    }
}
let person1 = new Person('bappi', 'saha');
console.log(person1.calculateAge());
// console.log(person1);
// let person2 = new Person('john', 'doe', '20-11-1998');
// console.log(person2);