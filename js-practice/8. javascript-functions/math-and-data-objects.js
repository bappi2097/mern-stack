document.querySelector('title').innerHTML="Math and Data Objects";
let val;
// math object
val = Math.PI; // value of PI
val = Math.E; // Value of E
val = Math.round(3.5); // 
val = Math.ceil(3.5);
val = Math.floor(3.5);
val = Math.sqrt(3);
val = Math.abs(-3);
val = Math.pow(2, 3);
val = Math.min(2, 3, 0, -1);
val = Math.max(2, 3, 0, -1);
val = Math.random();
val = Math.floor(Math.random()*100);

// date object
let today = new Date();
let birthday = new Date('08-26-1996 11:25:27');
birthday = new Date('august 26 1996');
val=today.toString();
val=birthday;
val=today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime(); //timestamp
// console.log(val);
birthday.setMonth(3);
birthday.setDate(3);
birthday.setFullYear(1996);
birthday.setHours(6);
console.log(birthday);
