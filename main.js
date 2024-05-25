// Task1-destruct
// let {name: n,age: a}={
//     age:25,
//     name:"merna"
// } 
// console.log(n,a);
let e=2;
let m=3;
[e,m]=[m,e];
console.log(e,m);


/////task2=>
function test(arr){
    var max=Math.max(...arr)
    var  min=Math.min(...arr)
    return  document.write(`max is ${max} mis is ${min}`)}
let arr1=[20,50,80,40];
test(arr1);


// console.log(...arr1);
// let arr2=[1,2,5,4,6,3];
// console.log(...arr2);
// let arr3=[...arr1,...arr2];

// console.log(Math.max(...arr3));
// console.log(Math.min(...arr3));
// //////////////////

