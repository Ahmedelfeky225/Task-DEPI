/* MAX_VALUE vs MAX_SAFE_INTEGER */
/* MAX_VALUE =>  static data property give me the Maximum number stored in the memory */
/* double precision only has 52 bits to represent the mantissa, thus
the numbers safe integers is between -(2^53-1) to (2^53 - 1)
the ability to represent integers exactly and to compare them correctly. */
console.log(Number.MAX_SAFE_INTEGER)
let v =Number.MAX_SAFE_INTEGER ;
let x =Number.MAX_SAFE_INTEGER + 1;
let y =Number.MAX_SAFE_INTEGER + 2;
console.log(x === y)
console.log(Number.isSafeInteger(v))
console.log(Number.isSafeInteger(x))
console.log(Number.isSafeInteger(y))
let n=2 ** 53;
console.log(n)
console.log(Number.isSafeInteger(n))
n=(2 ** 53) -1;
console.log(Number.isSafeInteger(n))
console.log(Number.isSafeInteger(Infinity))
console.log(Number.isSafeInteger(0))//true
console.log(Number.isSafeInteger(3.1))
console.log(Number.isSafeInteger(NaN))
console.log(Number.isSafeInteger(3.0))

/* MAX_SAFE_INTEGER => give me the Maximum number safe in the memory */
// MAX_SAFE_INTEGER is a property of the JavaScript Number object.
// 21024 - 2971, or approximately 1.7976931348623157E+308.
// The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.
console.log(Number.MAX_SAFE_INTEGER)
// Values larger than MAX_VALUE are represented as Infinity 
function multiply(x,y){
    if (x * y > Number.MAX_VALUE){
        return `Infinity`;
    }else{
        return x * y;
    }
}
console.log(multiply(Number.MAX_SAFE_INTEGER,5))
console.log(multiply(Number.MAX_VALUE,5));

console.log("=".repeat(40))
// ------------------------------------------------------------------------------
// Number.toFixed check data type
console.log(100.556.toFixed())
// turn into the number to String
console.log(100.555.toFixed(2))//100.56
// so the third Number decimal  after from 5 to 10
// so the second number decimal increase 1
console.log(100.5554.toFixed(3))//100.555
// so the fourth Number decimal  after < 5
// so the third number decimal still
console.log("=".repeat(40))
// -------------------------------------------------------------------------------
// substring() -->3 Examples
// The substring() method does not change the original string.
/*1)*/let myName="Ahmed Atia Elfeky"
console.log(myName.substring(6,11))//Atia
// if start > end it will swap
console.log(myName.substring(5,0))
// if we use negative value it will start from begining
console.log(myName.substring(-1,11))
/*2)*/let txt = "We Love Football";
let cut=txt.substring(0,txt.length-4)
document.getElementById("cut").innerHTML=cut
// console.log(txt.slice(0,txt.length-4))
/*3)*/ 
let app="  Netflix Films "
// app.trim() //Not affect to string
console.log( app.trim().substring(0,10))//chain methods
// substring(start , Number to Extract) -->3 Examples
console.log("=".repeat(40))
/*1)*/let Message="Hello World!"
console.log(Message.substr(6,6))//World!
// if start > end(Number of Extract) => it will give empty string
console.log(Message.substr(5,0))
// if we use negative value it will start from the End
console.log(Message.substr(-11,4))

/*2)*/let text = "We Love Mohamed";
let cutting=text.substr(text.length-7)
document.write(`<h4>${cutting}</4>`)
/*3)*/ 
let tv="  Samsung Screen 50   "
// app.trim() //Not affect to string
console.log(tv.trim().substr(0,14).toUpperCase())//chain methods
console.log("=".repeat(40))
// ------------------------------------------------------------------------------
// includes(value[Mandatory],startSearching[optional]) =>3Example
/*1)*/let الاسم="محمد صلي الله عليه وسلم";
let الاسم1="محمد";
console.log(الاسم.includes( الاسم1))


/*1)*/let messageWelc="Hello";
console.log(messageWelc.includes("H",1))
/*1)*/if(messageWelc.includes("e",1)){
    console.log("the letter is present")
}else {
 console.log("the letter is not present")
}
//String New Method 6 Methods ==>3Examples