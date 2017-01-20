// assign2.js:

// log to the console the 3rd value from process.argv
const myVar = process.argv
console.log(myVar[2])

// convert the 3rd and 4th value to numbers, add them together and log the sum
let myArr = []
myArr.push(Number(myVar[2]))
// myArr.push(String(myVar[7]), Number(myVar[5]))  ---> demo of putting 2 value with string
console.log(myArr)
let mySum = (Number(myVar[2])) + (Number(myVar[3])) 
console.log(mySum)
