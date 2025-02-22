console.log("In this tutorial we will learn variable")
//Ways to declare variable in javascript
const userName = "Neeraj Joshi" //this cannot be modified
let age = 31
var email = "nj@gm.com"
let pwd = 121212
city = "Haldwani" 
let aadhar;

console.table([userName,age,email,pwd,city,aadhar])

let a = 2; //variable declared with let cannot be redeclared by using let but can be done by 'var' or w/o keyword
//let a = 5 is not allowed
//var a = 6 & a = 7 is allowed
let b = 3;
let c = (a+b)

console.log("Value of c =",c)
//redeclaring a & b w/o using let
a = 6
b = 4

console.log(a,b)

var x = 2;
var y = 5;
let z = (x+y+c)


console.log("Value of updated x ",x)
console.log("Value of z =",z)