const obj1 = {
    name:"Gauarav",
    dep:"CSE",
    sub:["DSA","OS","DBMS"],
    phn:8657218488
}

console.log(obj1)

obj1.lodu = function(){
    console.log(`This is function ${this.name}`) //directly u cannot string interpolition in refernce 
    // obj so just use this keyword so it can be accessible 
}

console.log(obj1.lodu())