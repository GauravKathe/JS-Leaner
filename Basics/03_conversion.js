
/* Note 
1. In javascript we can convert one data type to another by using the particular dataype class
like 
let a=33
console.log(String(a))
so the above number type will be converted to string 

2.if we're trying to convert 33abc string to number so in JS it gets convert like that variables datatype gets 
changed but value becomes NaN - Not an Number 

3.If let a = null 
let b = Number(a);
console.log(b); it will convert it to number and will give o/p 0 
null => 0
33 abc => NaN
True  => 1
hitesh => NaN

*/

let score="33a"
let convert = Number(score)

console.log(convert + " "+ typeof(convert))

let sc=1008
let con= String(sc)
console.log(typeof  con,con)

//console.log(2**3) //power like 2^3