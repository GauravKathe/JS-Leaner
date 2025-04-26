// Objects are combination of key : value pair okay 
/* there are 2 ways to access the values of obj 
// 1.dot => obj_name.key [ obj.emial ]
// 2.[] => In JS objects key are treated as string only but we wont write in string commanly 
//         but if wrote key as string then we dont have .dot option to access rhe value then we need 
//          obj["name"] 
*/   

const sym = Symbol("123")

const obj={
    name:"gaurav",
    email:"gsk@gamil.com",
    [sym]:"key1",
    phn:8657218488,
    add:"Ravte , Pune",
    "full name":"gaurav sharad kathe"
};


console.log(obj.email,obj.phn)
console.log(obj["full name"])

console.log(obj)

obj.email="pornhub@gail.com"
Object.freeze(obj)
obj.email="gsk@gail.com"

console.log(obj)

