window.addEventListener('load', function(){
    document.querySelector("title").innerHTML="Bappi saha";
});

let persons = [
    {firstname: "bappi", lastname: "saha"},
    {firstname: "john", lastname: "doe"},
];
function createPerson(person, showPerson){
    setTimeout(function(){
        persons.push(person);
        console.log("person added");
        showPerson();
        console.log("all print");
    }, 2000)
}
function showPerson(){
    setTimeout(function(){
        let output = "";
        for(index in persons){
            output+=`<h1> ${persons[index].firstname} </h1><h2> ${persons[index].lastname} </h2>`
        }
        document.querySelector("#output").innerHTML = output;
    }, 4000)
}
createPerson({firstname: "AR", lastname: "Rahman"}, showPerson);