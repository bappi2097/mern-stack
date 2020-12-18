document.querySelector('title').innerHTML="Array Iteration Function";
var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 1];

/**
 * forEach function perameters
 * *param1: value (each),
 * *param2: index (each),
 * *param3: array (full)
 */


foods.forEach(function(value, index, array){
    console.log(`Index: ${index}, Value: ${value}`);
    console.log(array);
})

// outside function from forEach

let printEverything = function(value, index, array){
    console.log(`Index: ${index}, Value: ${value}`);
    console.log(array);
};

foods.forEach(printEverything);

// Array iteration using mapping
let addSomething = function(value){
    return `Item is ${value}`;
}
foods_map = foods.map(addSomething);
foods_map.forEach(value => {
    console.log(value);
})