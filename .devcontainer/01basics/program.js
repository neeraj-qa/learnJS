//1-Program to check number is prime or not
const number = 24
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {// optimised approach by checking divisiblity by square root
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`);

//2- Program to reverse a string
//logic - store the characters of original str from end into a another str using loop

const original = "Neeraj";
let reverse ="";

let length = original.length;
console.log(`Original string ${original} & its length is ${length}`)

for(let i = (length-1); i>=0; i--){
    reverse = reverse + original[i]
}    
console.log(`Reverse string is ${reverse}`)

//3- Program to reverse array

const arr = [2,1,4,6,5,7,8,9,3,11]

let reverseArray = arr.reverse()

let sorted = reverseArray.sort((x,y)=>x-y);

console.log(`Original array ${arr} & its reverse is ${reverseArray}`)

console.log(`Sorted array ${sorted}`)

function calculateSum(arr) {
    let sum = 0;    
    for(let i=0; i<=arr.length-1;i++){
        sum = sum +arr[i]
    }
    console.log(`sum of array elements ${sum}`)
}
let ary = [10, 20, 30]

calculateSum(ary)

//4- Program to sort an array using bubble sort

function bubbleSort(marks){
const len_marks = marks.length
let swapped ;
console.log(`Marks before sorting ${marks}`)
let i , j, temp;
for(i = 0 ; i <= len_marks-1 ;i++){
    swapped = false;
    for(j=0 ; j < len_marks - i - 1 ; j++){
        if ( marks[j] > marks[j+1] ){
            temp = marks[j];
            marks[j] = marks[j+1];
            marks[j+1] = temp;
            swapped = true;
        }
    }

    if(swapped==false)
    break;
}
console.log(`Sorted marks ${marks}`)
console.log(`Highest marks ${marks[len_marks-1]}`)
console.log(`Highest marks ${marks[0]}`)
}
let StudentMarks = [22,15,12,10,16,21,13,9,8]
bubbleSort(StudentMarks)