/* 
1.if we push one array into another one like this 
const arr=[1,2,3,4,5]
const arr1=[10,11,12,13]
arr.sort(arr1)
then the o/p[1,2,3,4,5,[10,11,12,13]] it will be one element it will not concat 

2.Most Important we can also use spread out .
basically it spread out the each element in array. [...aray_name]

3.Most Important flat() method - this methid is used to write one sigle arrays of an multiple subarrays

*/

const marvel=["Thor","Ironman","Spiderman"]
const dc=["flash","batman","superman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][0])

console.log(marvel.concat(dc))

const allvalues=[...marvel, ...dc] 
console.log("This is spread out : ",allvalues)

const sub=[1,2,3,[12,12,12],4,5,[6,7,8,[9,10]]]
const flatMehod = sub.flat(Infinity)
console.log(flatMehod)

// +++++++++++++++++++++++++++++++++++++++++++++ ADVANCED METHOD +++++++++++++++++++++++++++++++++++++

console.log(Array.isArray("Gaurav"))
console.log(Array.from("Gaurav"))

console.log(Array.of(marvel,dc,sub)) //combines everyone