const tinder= new Object()  //single ton onject 
console.log(tinder)

tinder.id=123
tinder.name='Gaurav kathe'
tinder.email='gauravkathe@gmail.com'

console.log(tinder)
console.log(tinder.name)

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