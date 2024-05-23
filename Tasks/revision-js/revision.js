// document.write("<h1>Welcome JS</h1>")
// document.querySelector("h1").style.color="blue";
// document.querySelector("h1").style.backgroundColor="#ccc";
// window.onload=function(){
//     document.querySelector("p").style.fontSize="30px";
// //     document.querySelector("p").style.color="#cdd";
// //     document.querySelector("p").style.fontWeight="bold"
// // }
// // console.error("error")
// // console.warn("warn")
// // console.log("Log Message")
// // console.table(["Ahmed","Mostafa","Menna"])

// // // const start=Date.now();
// // // await functionToBeMeasured();

// // // const end =date.now();

// // // console.log(`Ezecution time: ${end - start}ms`)

// // // console.time('Execution Time');

// // // await functionToBeMeasured();

// // // console.timeEnd('Execution Time');
// // console.log("%cHello %cFrom %cJS %cFile","color:brown; font-size:40px","color:yellow;font-size:40px","color:#00f;font-size:40px","color:violet;font-size:40px")
// // var myName='Ahmed';
// // console.log("Hello " + myName)
// // //Es6-->template Literals
// // console.log(`Hello ${myName}`)
// // console.log(typeof"Ahmed Elfeky")
// // console.log(typeof 5000)
// // console.log(typeof ["Ahmed",10,15])
// // console.log(typeof {name:"Ahmed",age:23,country:"Egypt"})
// // console.log(typeof null)
// // console.log(typeof undefined)
// // let x=BigInt(9999999999999999999999999999);
// // console.log(x)
// // let c;
// // console.log(typeof c)
// // var user="Ahmed";
// // console.log(user)
// // console.log(hello)
// // hello.innerHTML="option"

// // var us="ahmed";
// // var us=1;
// // console.log(us)
// // console.log(window.us)//Added to window
// // for (var i=0;i<10;i++){
// // }
// // console.log(i)//10
// // function foo(){
// //     if(true){
// //         var ch1="robin";
// //         let ch2="ted";
// //         const ch3="Barney";
// //     }
// //     console.log(ch1);
// //     console.log(ch2)
// //     console.log(ch3)
// //       var ch1="robin";
// // }
// // //foo()
// //  // console.log(ch1);
// //   console.log("Ahmed \"Elfeky\"")
// //   let a="We Love "
// //   let b="Mohamed";
// //   c="And";
// //   let d="Programming";
// // document.write(a+ b)
// // console.log(a,b)
// // document.write("<br><br>")
// // document.write(`${a} ${b} ${c} ${d}`)
// // let title="Elfeky";
// // let desc="Ahmed Atia Elfeky"
// // let markup=`
// // <div class="card">
// // <div class="child">
// // <h2>${title}</h2>
// // <p>${desc}</p>
// // </div>
// // <div>
// // `
// // document.write(markup)
// // console.log(+null)
// // console.log(-false)
// // //Number() --> Constructor for oop and turn into Number
// // console.log(Number("100"))
// // a="10";
// // b=50;
// // c=true;
// // console.log(+a + b + c);
// // console.log(a - b)
// // console.log(100_00_00)
// // console.log(1e10)
// // console.log(10**10)
// // console.log(1.6+1.4)
// // console.log(100000000.0)
// // console.log(typeof Number)
// // console.log(BigInt(Number.MAX_VALUE))
// // console.log(Number.MAX_SAFE_INTEGER)
// // console.log(Number.MIN_VALUE)
// // console.log(Number.MIN_SAFE_INTEGER)
// // x=10;
// // i=10.233;
// // console.log(10.26654.toFixed(3))
// // console.log(10..toString(10))
// // console.log(Number.isInteger(x))
// // console.log(Number.isInteger(10.5))
// // console.log(Number.isNaN(10))
// // console.log(Number.isNaN(10-"apple"))
// // console.log(Number.parseInt("10 Ahmed"))
// // console.log(Number("10 Osama"))
// // console.log(+"10 osama")
// // console.log(parseInt("osama 10 osama"))//NaN
// // console.log(parseInt("osama 10"))//NaN
// // console.log(parseFloat("10.56666s Ahmed"))
// // // math object
// // //round()
// // //ceil()
// // //floor()
// // //trunc()-->truncate(بيقطع جزء الديسمل فقط)
// // //random()
// // //min()
// // //max()
// // //pow()
// // console.log(Math.floor(10.9))
// // console.log(Math.ceil(10.1))
// // console.log(Math.round(10.5))
// // console.log(Math.round(10.4))
// // console.log(Math.min(10,10.5,10.6,10.1,15,17))
// // console.log(Math.max(10,10.5,10.6,10.1,15,17))
// // console.log(Math.pow(10,10))
// // console.log(Math.ceil(Math.random() * 4))//0:4
// // console.log(Math.floor(Math.random() * 4) + 1);//0:4
// // console.log(Math.trunc(10.5))
// // console.log(Math.trunc(10.1))
// // console.log(Math.trunc(10.9))




// // let theName="Ahmed Atia Elfeky";
// // console.log(theName[2])
// // console.log(theName.charAt(2))
// // console.log(theName.charAt(5))//مفيش حاجه
// // console.log(theName[5])//undefined
// // console.log("Ahmed".length)
// // console.log(theName.length)
// // let cut=theName.trim();
// // console.log(theName.length)
// // console.log(theName.toLowerCase())
// // console.log(theName.toUpperCase())
// // //take me char -> m and turn into Capital Character
// // console.log(theName.trim()[2].toUpperCase())
// // //String Methods
// // // - indexOf()
// // //- lastIndexOf()
// // //- slice()
// // //- repeat()
// // //- split()
// // console.log(theName.indexOf("m",0))
// // console.log(theName.lastIndexOf("m",2))
// // console.log(theName.slice(2,5))
// // console.log(theName.repeat(10))
// // console.log(theName.split("",2))
// // // - substring(start[mand], end[option])
// // // if s > e -> swap
// // // if  s < 0 -> it will begin from start
// // // 
// // console.log(theName.substring(5,2))//swap
// // console.log(theName.substring(-1,17))// from start
// // // - substr(start[mand],Number of Character Extract)
// // console.log(theName.substr(0,5))
// // console.log(theName.substr(6,2))//
// // console.log(theName.substr(-1,1))//y
// // // - includes()
// // console.log(theName.includes("Ah",1))//false
// // // - startsWith()
// // console.log(theName.startsWith("Ah",1))//false
// // // - endsWith()
// // console.log(theName.endsWith("y",17))//false

// // //Comparison Operator

// // console.log(10 == "10")//compare value only
// // console.log(10 != "10")
// // //identical
// // console.log(10 === "10")//compare value and datatype
// // console.log(10 === 10)
// // console.log("Ahmed" === "osama")//false
// // console.log(typeof "Ahmed" === typeof "osama")// string === string -->true
// // //Logical Operator
// // console.log(!true)
// // console.log(!(10== "10"))
// // console.log(10 == "10" && 10<7)//false
// // console.log(10 == "10" || 10<7 || 10==="10")//false
// // //if Cnsition
// // // let price=100;
// // // let discount=true;
// // // let discountAmount=30;
// // // let country="Egypt";
// // // if(discount === false){
// // //     price-=discountAmount
// // // }else if(country ==="Egypt" && discount ===true){
// // //     price-=discountAmount+10;
// // // }
// // // console.log(price)
// // // let price=100;
// // // let discount=false;
// // // let discountAmount=30;
// // // let country="syria";
// // // if(discount === true ){
// // //     price-=discountAmount
// // // }else if(country ==="Egypt" && discount ===true){
// // //     price-=discountAmount+10;
// // // }else if(country=== "KSA"){
// // // price-=discountAmount+5;
// // // }else{
// // //     price-=10;
// // // }
// // // console.log(price)

// // //Nested If

// // let price=100;
// // let discount=false;
// // let discountAmount=30;
// // let country="syria";
// // let student =true;
// // if(discount === true){
// //     price-=discountAmount
// // }else if(country === "syria"){
// //     if(student === true){
// //         price-=discountAmount +30;
// //     }
// // }else{
// //     price-=10;
// // }
// // console.log(price)

// // let the_Name="Ahmed";
// // let theGender="Male";
// // let theAge=23;
// // if(theGender ===  "Male"){
// //     console.log("Mr "+ the_Name)
// // }else{
// //     console.log("Mrs "+ the_Name)
// // }
// // theGender==="Male"? console.log("Mr "+ the_Name): console.log("Mrs "+ the_Name)
// // let result=theGender === "Male"?"Mr":"Mr";
// // console.log(result)
// // console.log(theGender==="Male"?"Mr":"Mrs");
// // console.log(`Hello ${theGender === "Male"?"Mr":"Mrs" } ${the_Name}`)
// // theAge===20?console.log("Age Is 20"):theAge>20 && theAge<60?
// // console.log("My Age 20 to 60 "):theAge>60?console.log("Larger than 60"):
// // console.log("Unknown")
// // let Price=false; //0 null undefined false
// // console.log(`The Price Is ${Price || 200}`)
// // // constructor built in is show the number true or false
// // console.log(Boolean(100))
// // console.log(Boolean("100"))
// // console.log(Boolean(-100))
// // console.log(Boolean(-100.5))
// // console.log(Boolean(100.5))
// // console.log(Boolean(100.5 - ""))
// // console.log(Boolean(100.5 - "Ahmed"))
// // console.log(Boolean(""))
// // console.log(Boolean(" "))
// // console.log(Boolean(null))
// // //Nullish Coalescing //null ,undefined (only)
// // // Logical or //null ,undefined ,falsy value
// // let priCe;
// // console.log(`The Price Is ${priCe ?? 200}`)
// // priCe=null;
// // console.log(`The Price Is ${priCe ?? 200}`)
// // priCe=0;
// // console.log(`The Price Is ${priCe ?? 200}`)//0 --> solve  Logical or
// // console.log(`The Price Is ${priCe || 200}`)
// // let day=3;
// // switch(day){
// //     case 0:
// //         console.log("Saturday")
// //         break;
// //     case 1:
// //         console.log("Sunday")
// //         break;
// //     case 2:
// //     case 3:
// //         console.log("Monday")
// //         break;
// //     default:
// //         console.log("Wrong")
// //     }

// // //create 2 Arrays
// // //new Array(),[]
// // //access array elements
// // //nested array
// // // change array element
// // //check for Array Array.isArray(arr)
// // let myFriends=["Ahmed","Mostafa","Mona","Ehab"]
// // console.log(myFriends[1])//Mostafa
// // console.log(`Hello ${myFriends[0]}`)
// // // nested element in array such as e in Ahmed
// // console.log(myFriends[0][3])
// // myFriends=["Ahmed","Mohamed","sayed",["Marwan","Ali"]]
// // console.log(myFriends[3][0][2])
// // //change array element
// // myFriends[myFriends.length-3]="Mohab";
// // console.log(myFriends)
// // console.log(Array.isArray(myFriends))//true
// // let str="Hemat"
// // console.log(Array.isArray(str))
// // console.log(str.length)
// // myFriends.length=3;
// // console.log(myFriends)
// // myFriends.unshift("Hemat","Atia")
// // console.log(myFriends)
// // myFriends.push("Bebo","Trieka")
// // console.log(myFriends)
// // myFriends.pop()
// // console.log(myFriends)
// // myFriends.shift()
// // console.log(myFriends)
// // let emptyArr=[]//undefined
// // let arr=emptyArr.pop()
// // console.log(arr)
// // let first=myFriends.shift()
// // console.log(`First Name Is ${first}`)
// // console.log(myFriends.indexOf("Ahmed",0))
// // for(let i=0;i<myFriends.length;i++){
// //     if(myFriends.indexOf("Ahmed") === -1){
// //         console.log("Not Found")
// //     }else{
// //         console.log("Found")
// //         break;
// //     }
// // }
// // myFriends=[10,"Ahmed","Mohamed","90",1000,100,20,"10",-20,-10]
// // myFriends.sort()
// // console.log(myFriends)
// // myFriends.reverse()
// // console.log(myFriends)
// // myFriends.sort().reverse()
// // console.log(myFriends)
// // console.log(myFriends.includes("Osama"))
// //  str="os"
// // // if start is undefined => 0
// // // if end is undefined => indexes slice to the end
// // console.log(myFriends.slice(1,5))
// // //splice(start[mand],deletedcount[opt],item to Add)//return New Array
// // myFriends.splice(3,4,30000)
// // console.log(myFriends)
// // console.log(myFriends.slice(0,myFriends.length-2))
// // // console.log(myFriends.join(""))
// // let myNewFriends=["samar","sameh"]
// // let schoolFriends=["Haytham","Shady"]
// // let allArray=myFriends.concat(myNewFriends,schoolFriends,500,["Ahmed",21])
// // console.log(allArray)
// // console.log(myFriends.join("@").toUpperCase())
// // //Loop For And Concept of Loop
// // // for ([initializtion] [condition] [action After repeat the code]) All optional//
// // for(let i=1;i<=10;i+=1){
// //     console.log(i)
// // }
// // // for(let i=0;i<myFriends.length;i++){
// // //     console.log(myFriends[i])
// // // }
// // // let onlyString=[]
// // // myFriends=[1,2,"Osama","Sameer","Ahmed","Sayed","Ali"]
// // // for(let i=0;i<myFriends.length;i++){
// // //     if(typeof myFriends[i] === "string"){
// // //         onlyString.push(myFriends[i])
// // //     }
// // // }
// // // console.log(onlyString)
// // // //Nested Loop
// // // let products=["keyboard","mouse","pen","pad","Monitor"];
// // // let colors=["red","green","blue"]
// // // let models=[2020,2021]
// // // for(let i=0;i<products.length;i++){
// // //      document.write(`<br>`)
// // //     document.write(`#`.repeat(15))
// // //     document.write(`<h3># ${products[i]}</h3>`)
// // //     for(let j=0;j<colors.length;j++){
// // //         document.write(`<div>${colors[j]}</div>`)
// // //     }
// // //        for(let u=0 ;u<models.length;u++){
// // //             document.write(`${models[u]}`)

// // //        }}

// // // for(let i=0; i<products.length;i++){
// // //     if (products[i]==="pad"){
// // //         break;
// // //     }
// // //     console.log(products[i])
// // // }
// // /*
// // let strArr=[]
// // let newData=[10,2,3,"keyboard","mouse","pen","pad",7,-1]
// // for(let k=0;k<newData.length;k++){
// //     if(typeof newData[k] === "number"){
// //         continue;
// //     }
// //     strArr.unshift(newData[k])
// // }
// // console.log(strArr)
// // /*لاحظ ان هنا ضاف العنصر في الاول كل عنصر جديد بينضاف بنضيفه في الاول
// //  */
// // /*
// // mainLoop:for(let i=0;i<products.length;i++){
// //     console.log(products[i]);
// // nestedLoop:for(let k=0;k<colors.length;k++){
// //         console.log(`- ${colors[k]}`)
// //         if(colors[k]==="green"){
// //             break mainLoop;
// //         }
// //     }
// // }
// // */
// // let products=["keyboard","mouse","pen","pad","Monitor"];
// // let colors=["red","green","blue"]
// // let models=[2020,2021]
// // let i=0;
// // for(;;){
// // console.log(products[i])
// // if(products[i] === "Monitor"){
// //     break;
// // }
// // i++;
// // }
// // let products=["keyboard","mouse","pen","pad","Monitor"];
// // let colors=["red","green","blue"]
// // let showCount=5;
// // document.write(`<h1>Show ${showCount} Products</h1>`)
// // for(let i=0;i<products.length;i++){
// //  document.write(`<div>`)
// //     document.write(`<p>${i+1} - ${products[i]}</p>`)
// //     if(i===showCount){
// //         break;
// //     }
// //         for(let k=0;k<colors.length;k++){
// //         document.write(`<h4>${colors[k]}</h4>`)
// //     }
// //     document.write(`<h4>Color: ${colors.join(" | ")}</h4>`)
// //  document.write(`</div>`)
// // }
// // document.querySelector("h1").style.color="blue";

// // let q=0;
// // while(q<products.length){
// //     console.log(products[q])
// //         q++;
// // }
// // let index=0;
// // while(true){
// //     console.log(colors[index])
// //     index++;
// //     if(index === colors.length){
// //         break;
// //     }
// // }

// // let i=1;
// // do{
    
// //     console.log(i)
// //      i++;
 
// // }while(i<=10)
// // //Function
// // console.log(typeof console)//object
// // console.log(typeof console.log)//function
// // function sayHello(userName){
// //     return `${userName}`
// // }
// // //Dry ->Don't repeat yourself
// // console.log(`First Name Is ${sayHello("Ahmed")}`)
// // console.log(`First Name Is ${sayHello("Mostafa")}`)
// // console.log(`First Name Is ${sayHello("Mona")}`)
// // console.log(`First Name Is ${sayHello("Emad")}`)
// // console.log(`First Name Is ${sayHello("Loay")}`)

// // function accessReach(name,age){
// //     if (age<18){
// //         console.log("Can't reach accessable for Application")
// //     }else{
// //         console.log(`the Data:My Name Is ${name} and My Age Is ${age}`)
// //     }
// // }
// // accessReach("Ahmed Elfeky",17)
// // accessReach("Ahmed Elfeky",23)
// // function rangeYear(start,end,exclude){
// //     console.log("Range Years:")
// //     for(let i=start;i<=end;i++){
// //         if(i===exclude){
// //             continue;
// //         }
// //         console.log(i)
// //     }
// // }
// // rangeYear(2001,2024,2019)
// // //function return
// // // stop for execution 
// // // ومفيش
// // // حاجه 
// // // بتيجي 
// // // بعدها
// // // there are difference between 3 Example due to template Literals
// // function getCalc(n1,n2){
// //     return `Addition: ${n1 + n2}`;
// // }
// // let result=getCalc(20,70)
// // console.log(result + 100) //90100

// // function getCalc(n1,n2){
// //     return `${n1 + n2}`;
// // }
// // result=getCalc(20,70)
// // console.log(result + 100) //90100
// // function getCalc(n1,n2){
// //     return  n1 + n2;
// //     // console.log(a)//Unreachable code detected
// // }
// // result=getCalc(20,70)
// // console.log(result + 100) //190


// // by return we can interrupt for function
// function rangeNumber(first,last){
//     for(let i=first ;i<=last;i++){
//         console.log(i)
//         if(i === 5){
//             //return (or)
//             return `interupting`
//         }
//     }
// }
// rangeNumber(1,10)
// function sayHello(username,age){
//     if(age === undefined){
//         age="unknown"
//     }
//     return `Hello ${username} and Your Age ${age}`
// }
// console.log(sayHello("Ahmed"))

// function sayHello(username,age){
//     age=age||"Not There"
//     return `Hello ${username} and Your Age ${age}`
// }
// console.log(sayHello("Ahmed"))

// console.log(sayHello("Ahmed"))

// function sayHello(username="Momen",age="unknown"){
//     age=age||"Not There"
//     return `Hello ${username} and Your Age ${age}`
// }
// console.log(sayHello())


// //Rest Parameter
// function calc(...numbers){
//     console.log(Array.isArray(numbers))//true
//     console.log(typeof(numbers))//object
//     let result=0;
//     for(let i=0; i<numbers.length;i++){
//         console.log(numbers[i])
//         result+=numbers[i];
//     }
//     console.log(`Final Result: ${result}`)
// }
// calc(10,20,30,40,50)

// function showData(name,age,hoursSalary,options=true,...skills){
//     document.write(`<div>`)
//     document.write(`<p>My Name Is: ${name}</p>`)
//     document.write(`<p>And My Age: ${age}</p>`)
//     document.write(`<p>and price 1Hour Is ${hoursSalary}</p>`)
//     if(options === true){
//         if(skills.length > 0){
//         document.write(`<p>My Skills:</p>`)
//           for(let i=0;i<skills.length;i++){
//             document.write(`<p>${skills[i]}</p>`)
//           }}else{
//           document.write(`<p> No Skills </p>`)
//           }
//     }else{
//         document.write(`<p>Skills is Hidden</p>`)
//     }
//     document.write(`</div>`)
// }
// showData("Ahmed",23,"100$",true,"HTML","CSS","JS")


// function showDetails(a,b,c){
//     let name,age,status;
//     for(let i=0; i<arguments.length;i++){
//         typeof arguments[i] === "string"?name=arguments[i]:typeof arguments[i] === "number"? age =arguments[i]:
//         arguments[i]===true?status=`You Are Available For Hire`:status=`You Are Not Available For Hire`;
//     }
//     document.write(`<p>Hello ${name},Your Age Is ${age},${status}</p>`)
// }
// showDetails("Ahmed",23,true)
// showDetails(23,"Ahmed",true)
// showDetails(true,"Ahmed",23)
// showDetails("Ahmed",false,25)

// console.log(plus(5,10))
// function plus(n1,n2){
//     return n1 + n2;
// }
// let calculator = function(num1,num2){
//     return num1 * num2;
// }
// console.log(calculator(10,15))
// function sayHello(){
//     console.log("Ahmed")
// }
// document.getElementById("hell").onclick=sayHello
// document.getElementById("hello").onclick=function(){
//     console.log("hello")
// }

// // setTimeout(function(){
// //     document.write(`<button>Click</button>`)
// // },2000)

// //Nested Function
// function sayMessage(fName,lName){
//     let message="Hello";
//     function concat(){
//         message=`${message} ${fName} ${lName}`
//     }
//      concat()
//     return message
// }
// console.log(sayMessage("Ahmed","Elfeky"))


// function sayMessage(fName,lName){
//     let message="Hello";
//     function concat(){
//         function getFullName(){
//             return `${fName} ${lName}`
//         }
//         return `${message} ${getFullName()}`
//     }
//      return concat()
// }
// console.log(sayMessage("Ahmed","Elfeky"))

// // function print(){
// //     return 10;
// // }

// let prin=function (){
//     return 10
// }
// console.log(prin())
// let pr=_=>10;
// console.log(pr())
// let Calc=(n1,n2)=>n1 + n2 ; 
// console.log(Calc(100,100))
// let Arrow=()=>{
//     a=50;
//     return a;
//  }
//  console.log(Arrow())
// // لو 
// // ارجيمونت 
// // من 
// // غير 
// // قوس 
// // ممكن 
// // عادي
// // من 
// // غير 
// // قوس
//  let Print=num=>num;
//  console.log(Print(1000))
// // Lexical Scope

// // function parent(){
// //     let a=60;
// //     function child(){
// //         console.log(a)
// //     }
// //     child();
// // }
// // parent()

// function parent(){
//     let a=70;
//     function child(){
//         console.log(a)
//     function grand(){
//         console.log(`from grand`,a)
//     }
//       grand()
//      }
//      child()
// }
// parent()

// -------------------------------------------------------
// Higher order Function
let myNums=[1,2,3,4,5,6]
let newArr=[]
for(let i=0;i<myNums.length;i++){
    newArr.push(myNums[i]+myNums[i]);
}
 console.log(newArr)

 let mapFun=myNums.map(function(element,index,arr){
    // console.log(`element:${element}`)
    // console.log(`Index:${index}`)
    // console.log(`Array:${arr}`)
        // console.log(`this:${this}`)
    return element + element;
 },10)
console.log(mapFun)
mapArro=myNums.map(ele=>ele+ele)
console.log(mapArro)

let funName=myNums.map(Add)
console.log(funName)
function Add(element){
    return element +element
}

let swappingCases="elZERo";
let swapArr= swappingCases.split("")
console.log(swapArr)
for(let i=0; i<swapArr.length;i++){
    if(swapArr[i] = swapArr[i].toLowerCase()){
        swapArr[i]= swapArr[i].toUpperCase();
    }else{
        swapArr[i]= swapArr[i].toLowerCase();
    }
}
console.log(swapArr.join(""))
swappingCases="elZERo";
// for(let i=0; i<swapArr.length;i++){
//     if(swapArr[i]===swapArr[i].toUpperCase()){
//         swapArr[i]=swapArr[i].toLowerCase()
 
//     }else {
//         swapArr[i]=swapArr[i].toUpperCase()
//     }
    
// }
// swapStr=swapArr.join("");
//  console.log(swapStr)
let swapStr=swappingCases.split("").map(function(ele){
    // if(ele === ele.toLowerCase()){
    //     return ele = ele.toUpperCase()
    // }else{
    //     return ele = ele.toLowerCase()
    // }
    return ele === ele.toLowerCase()?ele = ele.toUpperCase():ele = ele.toLowerCase()
}).join("")
// swapStr=newArr.join("")
console.log(swapStr)
// -------------------------------------------------------------------------------
let invertedNumbers=[1,-10,-20,15,100,-30]

let invert=invertedNumbers.map(function(element){
    return -element 
})
console.log(invert)
// ----------------------------------------------------------------------------------
let ignoreNumber="Elz123er4o";
let ignore=ignoreNumber.split("")
console.log(ignore)
let newA=[]
for(let i=0; i<ignore.length;i++){
     if (isNaN(ignore[i]) === true){
         newA.push(ignore[i]);      
         }
         else{
              continue;
     }
}
console.log(newA.join(""))

// --------------------------------------------------------------------

ignoreNumber="Elz123er4o";

ignore=ignoreNumber.split("").map(function(ele){
    return isNaN(ele) === true?ele:'';
})
 console.log(ignore.join(""))

// ------------------------------------------------------------------------
// Filter
let num=[1,2,3,4,5,6]

let newAr=num.map(function(el){
    return el + el;
})
console.log(newAr)

 newArr=num.filter(function(el){
    return el + el;
})
console.log(newArr)

let friends=["Ahmed","sameh","sayed","Asmaa","Amgad","Israa"]

let filterFriends=friends.filter(el=>el.startsWith("A"))
console.log(filterFriends)
let numbers=[11,20,2,5,17,10]
let filterEven=numbers.filter(el=>el%2===0)
console.log(filterEven)
// --------------------------------------------------------------------------
// Practice
let sentence="I Love Foood Code Too Playing Much"

let smallWord=sentence.split(" ").filter(function(element){
    return element.length <=4;
}).join(" ")
console.log(smallWord)
// ------------------------------------------------------------------------------
let mix ="A13BS2ZX";
let mixFilter=mix.split("").filter(el=>parseInt(el)).map(el=>el * el).join("")

console.log(mixFilter)
// ---------------------------------------------------------------------------------
// Reduce
num=[10,20,15,30]

let add=num.reduce(function (accumaltor,currentElem,index,arr){
    console.log(`Accumaltor:${accumaltor}`)
    console.log(`currentElement: ${currentElem}`)
    console.log(`Index: ${index}`)
    console.log(`Array: ${arr}`)
    console.log(`#`.repeat(20))
    return accumaltor + currentElem; 
},5)
console.log(add)
// ---------------------------------------------------------------------------------
let theBiggest=["Bla","Propaganda","other","AAA","Battery","Test","Propaganda_Two"]

let big=theBiggest.reduce(function (accumaltor,currentElem){
    console.log(`Accumaltor:${accumaltor}`)
    console.log(`currentElement: ${currentElem}`)
    console.log(accumaltor.length> currentElem.length?accumaltor:currentElem);
    console.log(`#`.repeat(20))
    return accumaltor.length> currentElem.length?accumaltor:currentElem; 
})
console.log(big)
// ------------------------------------------------------------------------------------
let removeChars=["E","@","@","L","Z","@","@","E","R","@","O","xz"];

let remove=removeChars.filter(function(ele){
    let isEnglishLetter=/^[a-zA-Z]$/.test(ele)
    return isEnglishLetter;
}).reduce(function(Acc,ele){
    return Acc+ele 
})
console.log(remove)
// حل 
// اخر
removeChars=["E","@","@","L","Z","@","@","E","R","@","O"];
remove=removeChars.filter(function(ele){
    return !ele.startsWith("@");
}).reduce(function(Acc,ele){
    return Acc+ele 
})
console.log(remove)
// --------------------------------------------------------------------------------------
