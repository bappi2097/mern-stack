document.querySelector('title').innerHTML="Object Methods";
let person = {
    firstname: "John",
    lastname: "Doe",
    dob: "20-11-1998",
    fullname: function(){
        return `${this.firstname} ${this.lastname}`;
    },
}

console.log(person.firstname);
console.log(person.fullname())
console.log(person['dob']);