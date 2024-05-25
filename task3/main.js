//Task3
var fruits = ["apple", "strawberry", "banana", "orange","mango"]
var Y=fruits.every(function(el){
  return typeof(el)=="string";
})
console.log(Y);
 var x=fruits.some(function(el){
    return (el.startsWith("a"));

 })
 console.log(x);

 var z=fruits.filter(function(el){
    return (el.startsWith("b")||el.startsWith("s"));
 })
console.log(z);

var a=fruits.map(function(el){
    return ("I like the ${el}");
 })
console.log(a);

var e=a.forEach(function(el) {
    console.log(el);
    
   
 })