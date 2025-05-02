const tinder= new Object()  //single ton onject 
console.log(tinder)

tinder.id=123
tinder.name='Gaurav kathe'
tinder.email='gauravkathe@gmail.com'

console.log(tinder)
//console.log(tinder.name)

console.log(Object.keys(tinder)) // only keys name 
console.log(Object.values(tinder)) //value name
console.log(Object.entries(tinder)) //both key value pair in an array of each sperate [key-value] pair

let user = {
    email:'gsk@gmail.com',
    fullname:{
        first_name:'Gaurav',
        last_name:'Kathe'
    },
    address:{
        build:'Chandrai',
        street:'Tapovan rd',
        city:'Nashik',
        state:'Maharashtra',
        country:'India'
    },
    phn:8657218488
}
console.log(user.address)

