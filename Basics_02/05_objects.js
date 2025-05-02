//---------------------------- Cocatination of Objects ----------------------------------
const obj1={
    1:'A',
    2:'B'
}
const obj2={
    1:'a',
    2:'b'
}
const obj3={obj1,obj2} //1st method to combine 2 or multiple objects
console.log(obj3)

// We can also concatinate the object by using Object[methods] ehichh is assign(target,source) 

const res=Object.assign({},obj1,obj2) // so here {} acts as an target and obj1 & obj2 acts as an source 
console.log(res)

const res1 = {...obj1,...obj2} // 3rd method which is spread out methods
console.log(res1)