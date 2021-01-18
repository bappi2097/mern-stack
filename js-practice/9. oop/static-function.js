document.querySelector('title').innerHTML="Static Function";

// static function
class Person{
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }
    greeting(){
        return console.log(`Hello ${this.firstname} ${this.firstname}!`);
    }
    static test(){
        console.log('I am Static');
    }
}

let person1 = new Person('john', 'doe');
person1.greeting();
Person.test();