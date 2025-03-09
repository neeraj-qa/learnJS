// Learning abt objects

/* An object in JavaScript is a data structure used to store related data collections. 
It stores data as key-value pairs, where each key is a unique identifier for the associated value. 
Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor. */

//Creating object using object literal

let obj = {
    name: "Neeraj",
    age: 30,
    job: `QA lead`
};

//console.log(obj)
//Accessing object properties
console.log(`Original object - `,obj)
//Modifying object properties
obj.name = `John`
console.log(`Updated object - `,obj )

//Creating object using new Object() constructor

let ob = new Object();
ob.name = "Neeraj Joshi"
ob.age = 31
ob.job = `QA Manager`

console.log(`Original object - `,ob)
//Accessing object properties
console.log(ob.name)
console.log(ob.job)
//Modifying object properties
ob.job = `VP`
ob.salary = `$5000`
ob.location = `Denmark`
ob.car = `BMW 500M`
ob.bike = `Harley Fat BOB`
ob.id = `A1`
ob.club = `Cool`
console.log(`Object after adding- `,ob)
delete ob.club
console.log(`Object after deleting - `,ob)
console.log(ob.hasOwnProperty("club"))

//Iteration in loop
for(let key in ob)
{
    console.log(key+": "+ob[key])
}