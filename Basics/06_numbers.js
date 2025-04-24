/* Note:
    1.toFixed(2) : used in e-commerce website like if an numebr is 100 then by using toFixed 100.00 
*/

const a=new Number(100)
console.log(a)

const balance = 1000000
console.log(balance.toLocaleString())
console.log(balance.toFixed(2))

const other=23.8966
console.log(other.toPrecision(2)) //it does precision by refrence ofbefore decimal point

//++++++++++++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4.1)) //absolute is nothing but any negative integer can be converted into positive

console.log(Math.random()) // it gives values in between to 0 to 1

console.log(Math.round(22.18)) // rounds on the basis of decimal 

console.log(Math.floor(22.9)) // it doesent change even if after decimal point value is ' >= ' 5

console.log(Math.ceil(22.1)) // takes the upper value evene if less than 5

console.log(Math.min(55,3,4,6,1))
