
/* Note 
1. In javascript we can convert ont data type to another by using the particular dataype class
like 
let a=33
console.log(String(a))
so the above number type will be converted to string 

2.
and if we're trying to convert 33abc string to number so in JS it gets convert like that variables datatype gets 
changed but value becomes NaN - Not an Number 

*/

let score="33a"
let convert = Number(score)

console.log(convert + " "+ typeof(convert))

let sc=1008
let con= String(sc)
console.table([convert,con])