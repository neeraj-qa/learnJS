//Learning about functions

function sum(a,b){
    let c = a+b;
    return c
}

let result = sum(5,3)
console.log(result)

//Callback functions

function hello(name,callback){
    console.log("Hello ",name);
    callback();
}

function bye(){console.log("bye...")}
hello("Neeraj",bye)

function calc(a,b, callback){
    return callback(a,b)
}

function add(a,b){
    return (a+b)
}

function multiply(x,y){
    return (x*y)
}
console.log("Sum of 9,6 - ",calc(9,6,add))
console.log("Product of 5,4 - ", calc(5,4,multiply))

//Anonymous functions - function w/o name
const javascript = function(){console.log("Hello JavaScript, code --> test--->deploy")}
javascript()
