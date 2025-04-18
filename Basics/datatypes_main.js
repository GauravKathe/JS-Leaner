/*
Note :
Symbol are unique datatype and they are immutable 
Primitive:
1.Number => number
2.String => String
3.Null => Object
4.Undefined => Undefined
5.Boolean => boolean

Non - Primitive:
1.Array => onject
2.Function => function
    
*/

let a = Symbol('123')
let b = Symbol('123')
console.log(a===b)

let n = null
console.log(typeof n) //object

let t = true
console.log(typeof t) //boolean

let arr = ['Gaurav','kathe','raj','mypack']; //object
console.log(typeof arr)

function sum(){
    console.log('hello world')
}
console.log(typeof sum)




