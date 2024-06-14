# SOME AND EVERY ARRAY METHOD
[JS-FILE](../js/45-some-and-every-Array-method.js)
---
# some Array method
```javascript
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");

var b = ages.some(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```
# Every Array method
```javascript
document.write("<center><h1>EVERY ARRAY METHOD </h1><center>")
var ages = [20,19,21,18,24];
document.write(ages +"<br><br>");

var b = ages.every(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```