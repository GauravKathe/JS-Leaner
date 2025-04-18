/*

Note : Stack(Primitive) and Heap Memory(Non-primitive)
 
*/
//Stack stack gives copy of an object or variable 
let user = "gaurav don ahe"
let user1= user
user1="bappi bhau don ahe "
console.log(user);
console.log(user1)


//Heap memory gives direct refernce so if we modify the reference then orifginal also get modified
let uss={
    email:"bappi@gmail.com",
    phn:"8657218488"
}

let uss1 = uss
uss1.email="gsk@gmail.com"

console.log(uss.email)
console.log(uss1.email)