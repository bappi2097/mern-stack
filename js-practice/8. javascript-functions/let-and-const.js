document.querySelector('title').innerHTML="Let And Const";
// var let and const

// var a = 20;
// a = a + 2;
// var a;

// let b =6;
// b = b*2;
// let b; // error

// const c = 7;
// c = 2; // error

// Global Scope
var a = 1;
let b = 2;
const c = 3;
var d =10;

console.log('Global Scope: ', a, b, c);

function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope: ', a, b, c);
    console.log('Global Scope in Function: ', d);

}
test();

if(true){
    var a = 5;

    console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);
