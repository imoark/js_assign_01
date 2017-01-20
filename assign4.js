// assign4.js:

// re-write the tip calculator using process.argv 
// so that you can pass a meal cost and a tip percentage from the command-line.


const myProcess = process.argv

const myMeal = Number(myProcess[2])
const myTips = Number(myProcess[3])
const myTax = 5
const TipAmount = (myTips / 100 ) * myMeal
const TaxAmount = (myTax / 100 ) * myMeal
const myTotal = myMeal + TipAmount + TaxAmount
const final = 'Hi, Your meal cost $' + myMeal +  ',\nand the '+ myTips +'% tips is $' + TipAmount + ' and the GST is $' + TaxAmount + ', so the total is $' + myTotal
const otherfinal = `Hi, Your meal cost CAD $${myMeal} + , and the `+ myTips + `% tips is CAD ${TipAmount} +  and the GST is $ + TaxAmount + , so the total is $ + myTotal`


console.log(final)
console.log(otherfinal)