/* Note : 
    1.In JS we can compare another data types console.log("2">1) true but it is not predictible 
    2.Prefer comparing the same data types like int to int string to string
    Ex : console.log("2"=="2");

    Type Script [ Langauge ]
    -> It provides like strict scripting langauge it dosen't allows you to comapare to differnet datatypes
    -> But if we follows the strict rules same in JS we dont need to go to Type Script
*/

console.log("2"=="2")
console.log(2>"10")

/* Note : 
    1.In JS equality operators (==) works diffrently from comparisons (>,<,>=,<=)
    2.In comparison operators null value get's converted into numbers i.e 0 
      that's why when we compare null>=0 its gives true
*/
console.log(null>0)
console.log(null==0)
console.log(null>=0)