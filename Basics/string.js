/*
Note : 
        1.Concatinate the string we can use '+' but this is not correct way to use it 
        -> we can use '${var_name}' String Interpolation 
*/

const name="Gaurav"
console.log(`hello my name is ${name} and my body count is ${1}`)

let a = new String("hello");
console.log(a)

const t="Hitesh lodu ahe na . tu aii ghal . chitya.heyy . "
console.log(t.replace('lodu','love'))

const temp=`tejyaa vadar rape of an same girl ${"Neha"}`
console.log(temp.replace('rape','love'))

console.log(t.split("."))