document.querySelector('title').innerHTML="Function Expression and Arrow Function (ES6)";
function saySomething(){
    console.log('Hello World');
}
let saySomething1 = function(){
    console.log("Hello World Again");
}

let saySomething2 = (name) => {
    console.log(`I am an arrow function ${name}`);
}

saySomething();
saySomething1();
saySomething2("js");