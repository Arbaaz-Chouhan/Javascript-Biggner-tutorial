# FIND AND FINDINDEX ARRAY METHOD
[JS-FILE](../js/46-find-and-findindex-Array-method.js)
---
# find();
>what is find array method ?

>we use find() method return the value of the first element in an array that pass a test
```javascript
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");
var b = ages.find(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```
---
# findindex();
> we use findindex() method return the index of the first element in an array that pass a test
```javascript
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");
var b = ages.findIndex(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```
---
# the and
