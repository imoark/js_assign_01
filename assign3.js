// assign3.js:

// pass two values to your program using process.argv, 
// add them together and check whether they are greater than 10, 
// less than 100 or greater than 100 but less than 1000. 
// log this information to the console. 
// this should be just one console log.

const myProcess = process.argv

let myProgram = []
myProgram.push(Number(myProcess[2]), Number(myProcess[3]))

let mySum = myProgram[0] + myProgram[1]

console.log(mySum)

let message

if (mySum >=10 && mySum < 100) {
	message = 'The sum is greater than 10 but less than 100.'
}
 
else if (mySum >=100 && mySum < 1000){
	message = 'The sum is greater than 100 but less than 1000.'
}

console.log(message)