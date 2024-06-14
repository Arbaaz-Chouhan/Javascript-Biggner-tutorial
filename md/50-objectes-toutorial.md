# OBJECT TOUTORIAL
[JS-FILE](../js/50-objectes-toutorial.js)
---
>now we are here to know aout object object are same as same array details i will try to explain u so we get start

```javascript
document.write("<br>");
var a = {
    firstName : "Arbaaz",
    lastName : "Chouhan",
    bortherName : "Adnan",
famliy : {
   fatherName :"mo.Aslam",
   motherName:"famida chouhan",
   bortherName:"Adnan chouhan"
},
selary:function(){
    return 25000;
},
fullName:function(){
    return this .firstName + " " + this.lastName
},

}; 
console.log(a.fullName());
console.log(a.selary);
console.log(a.famliy.fatherName);
console.log(a.firstName);
```
>this is same file as js so i explaining u diferrence between (array) and (object)

>array have index object have properties array index start with 0 object properties start from name

>now i tell u what i done at the top js file first we make variable and named him (a) then we start from curly braces becouse object stands from curly bracec then make properties u can make any kind of named properties but before dotes ( : ) now we call them but i telling u your work showing like this (object,object) in external file becouse we have a special trick to write this in external file we can write this in parent and child form like this (document.write(a.fullName())) okay now we can make 1 - object in object 2 - array 3 - function

# and call them in same as array form
---
## the end