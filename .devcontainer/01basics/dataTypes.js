console.log("In this tutorial we will learn data types")

let a = 2; //variable declared with let cannot be redeclared in same scope by using let but can be done by 'var' or w/o keyword
//let a = 5 is not allowed
//var a = 6 & a = 7 is allowed
let b = 3;
let c = (a+b)


console.log("Value of c =",c)

function MyFunction(){
    let x = 9
    var y = 3
    z = x*y
    let yes = true
    let no = false

    console.log("Product of x & y =",z)
    if (z > 10)
        console.log(yes)
    else
    console.log(no)
}

MyFunction();