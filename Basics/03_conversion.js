let score ="33"
let score1="22adsin2"

console .log(score+" " +typeof score)

let convert = Number(score)
console.log(convert + " "+typeof convert )


let convert1 = Number(score1)
console.log(convert1 + " "+typeof convert1 )

let x=33
let y=String(x)
console.log(y + " "+typeof (y))

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