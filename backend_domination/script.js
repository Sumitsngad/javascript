// variables
// var or let 
var a =12;
let b = 13;
// we can change it later
a = 33;
b = 22;
// here we created the variables and changed there values also 
// data types - primitives , reference 
// [] {} () - where ever this is used its of reference type and other are primitives 
// for ex - 
var c  = 12;
var d = c;
// here not the reference but the actual value is copied so any changes in d will be for d it self 
// one more example
var e = [1,2,3];
var f = e;
// no in the line number 16 the defined vcariable is an array and in line 17 the f faribale has assigned technically the value which was of e but what happened is the f  is reffering to e itself
// so any changes with f will result in the changes in its original body that e check with example 
f.pop()
// the above program what is does is removes the last element from the array value copied from e but the changes is reflected in f also 
// so how to copy then here it comes the spread operator
// do this 
var g =[...e];
// now lets see for the object type 
// lets try with an exampke
var h = {name : 'a' , type: 'plastic'};
var i = h
i.name = 'b' // -- this will effect both
// so how to actually copy it

var j = {...h} // this is how we acrtually copy this 
j.name = 'c'

// operators -- basics ones +,-,*,%,/....there are many... AND || && - need to study more

// loops - for , forin , foreach , while , do while , forof

//for(starting; cending; change ){}

for (var i = 0; i>12; i++){
    console.log(i)
}
// foreach

// to use this we have to make an array

var arr = [1,2,3,4];
arr.forEach(function(value){
    console.log(value+2);

})

// forin loop this is applied on an object

var obj = {name:"harsh",age:25}
// here ecvery thing on the left is key and the value after = is value so to get key we type value
for(var value in obj){
    console.log(value); 
}

var obj1 = {name:"sumit", age:25 , rollno:2141019314}
// to get the value of the object will do as given below
for(var value in obj1){
    console.log(obj1[value]) // to print the key we do console.log(value) and for the object we do is console.log(obj[value])
}
for(var value in obj1){
    console.log(value,":", obj1[value])
}
//conditionals statements 
 