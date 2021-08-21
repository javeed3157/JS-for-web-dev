console.log("This is functions");

function greet(name,text="Good Evening"){
    let name1="name1";//Local scope
    console.log(text+" "+name);
    console.log(name+" is a good bye");
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
}
let tex="Good Morning";
let name1="Javeed";
let name2="Suhail";
let name3="Shaik";
greet(name1,tex);
greet(name2);
let returnval = sum(1,2,3);
console.log(returnval);