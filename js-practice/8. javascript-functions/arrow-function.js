document.querySelector('title').innerHTML="Function Expression and Arrow Function (ES6)";
// normal function
function saySomething(){
    console.log('Hello World');
}

// function expression
let saySomething1 = function(){
    console.log("Hello World Again");
}

// arrow function
let saySomething2 = (name) => {
    console.log(`I am an arrow function ${name}`);
}

saySomething();
saySomething1();
saySomething2("js");