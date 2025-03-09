console.log("This is String class")

// Ways to declare a string
let s1 = "String created from dbl quotes"
let s2 = new String("String created using constructor")

//console.log(s1)
//console.log(s2)

/*Template Literals (String Interpolation) - Template literals allow you to 
embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.*/

let name = `Neeraj`
let companyName = `SafeGold`
let role = `Sr QA Engineer`

let intro = `Emp name ${name} , works in ${companyName} as a ${role}`
//console.log(intro)

//Basic functions & operations in String
//length - returns the total number of characters in a string
let str1 = ` NeerajJoshi `
let len = str1.length
console.log(len)
let str2 = `Neeraj Joshi`
console.log (str2.length) //space is also counted by length

//String comparison
/*
if (str1 == str2)
    console.log("str1 & str2 are equal")
else
console.log("str1 & str2 are  not equal") 

let str3 = `NEERAJ JOSHI`
if (str3 == str2) //UPPER CASE STRING IS NOT EQUAL TO SMALLCASE STRING
    console.log("str3 & str2 are equal")
else
    console.log("str3 & str2 are not equal")

let str4 =`Neeraj Joshi`
if (str4 == str2) //both str2 & str4 refers to same
    console.log("str4 & str2 are equal")
else
    console.log("str4 & str2 are not equal")
*/

//String concatenate

let str5 = name+" "+companyName+" "+role
console.log(str5)

// Escape Characters

const st1 = "\'GfG\' is a learning portal.";
const st2 = "\"GfG\" is a learning portal.";
const st3 = "\\GfG\\ is a learning portal.";
console.log(st1, st2,st3)

const s = "GeeksforGeeks is \
a learning portal";
console.log(s);

//Substring
let subStr = s.substring(0,5)
console.log(subStr)
let sub2 = s.substring(s.indexOf("l"),s.indexOf("p"))
console.log(sub2)
let sub3 = s.substring(-5) // substring convert negative index to 0
console.log("Substring - ",sub3)

//Uppercase Lowercase
let uprcs = subStr.toUpperCase()
console.log("UpperCase - ",uprcs)
let lwrcs = subStr.toLowerCase()
console.log("LowerCase - ",lwrcs)

let newStr = str5.replace('SafeGold', 'Google')
console.log("Updated string - ",newStr)
let trimmedStr = str1.trim()
console.log("Trimmed string -",trimmedStr)