# FILTER ARRAY METHOD
[JS-FILE](../js/47-filter-Array-method.js)
---
> we can use filter() array method creates
an array filter with all array element that pass a test 

> this is patern of filter array ->
```javascript
var ages = [10,14,17,40,30,18,20];
document.write(ages +"<br><br>");
var b = ages.filter(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```
## the and 