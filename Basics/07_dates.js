/* Date :
1. In JS the date months start with indexed 0 so Jan willbe assicilble by index 0
2. But the days can be accessed using 1
*/

let a=new Date()
console.log(a.toString())

console.log(a.toLocaleString())

console.log(typeof a) //object

let date = new Date("1-04-2025")
console.log(date.toDateString())
console.log(date.getDay())

