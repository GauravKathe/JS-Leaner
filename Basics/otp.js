let otp=''
console.log("This is OPT Generator ")

for(let i=0;i<4;i++){
    otp+=Math.floor(Math.random()*10)
}

console.log(`The OPT -> ${otp}`)