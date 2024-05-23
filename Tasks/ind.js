let arr=[1,-3,4,"Arabic","Math"]
let newArray=[]
for(let i=0; i<arr.length;i++){
    if (typeof arr[i] === "string"){
        newArray.push(arr[i])
    }
}
console.log(newArray)
function Addition(n1,n2){
    return n1 + n2;
}
console.log(Addition(10,20))
let lang="JAva";
let arr1=lang.split("")
console.log(arr1)
arr1.map(function(ele){
    if (ele === ele.toLowerCase()){
        console.log(ele.toUpperCase())
    }else{
        console.log(ele.toLowerCase())
    }
})