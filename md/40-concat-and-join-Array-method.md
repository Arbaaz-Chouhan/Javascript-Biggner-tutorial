# CONCAT AND JOIN ARRAY METHOD
[JS-FILE](../md/39-shift-and-unshift-Array-method.md)
---
>first we talk about concat() so cancat stands to join 2 arrays in one example --> if u create one array --> ["Arbaaz","Adnan"] and u create one more array --> ["Raman","Azeem"] and u want to marge these two array then u have to use concat() arrays so the pattern to write this in internal is

```javascript
var a =["Arbaaz","Adnan"];
var b =a.concat("Rahman","Azeem");
document.write(b);
```
---
# join();
now we talk about join() so if u want to make multiple strings in one string and remove commas then u use join() method so the pattern is
```javascript
var a =["Arbaaz","Adnan"];
var b =a.concat("Rahman","Azeem");
document.write(b + "<br>" + "<br>");
var c = a.join(" ");
document.write(c);
```
---
## the and
