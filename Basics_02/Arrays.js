/*
    1. In JS an array can store multiple elememnts of different data types 
    2. In JS arrays are not associative arrays ..it can be accessed using 0-based index
    3. In JS array copy operatinos cretae shallow create (i.e direct refernce to original array [Heap Memory])
    4. Array methods : a.push() b.pop() c.shift()removes first pos d.unshift() adds at 1st pos
    e.include() f.indexOf() g.join() converts the all elements into string  
*/

const arr=[1,2,3,4,5,true,"GSK"];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

const ar1=new Array(1,2,3,'Gaurav')
ar1.push('puchi')
console.log(ar1)

ar1.unshift('gaurav') //adds at  0th index 
console.log(ar1)

ar1.shift() //removes 0th element 
console.log(ar1)

// slice and splice
// 1.slice(1,3) slice the array like here 1 includes but 3 doesn't

const slice = new Array("This is an slice ",1,2,3,"babyyyy",4,5,6,7)
console.log(slice.slice(0,4))
