# NUMBER METHODS
[JS-FILE](../js/58-Number-methods.js)
---
>WE TALK ABOUT THESE METHODS

|NUMBER METHOD|
|------------|
|Number();|
|ParseInt();|
|ParseFloat();|
|isFinite();|
|isInteger();|
|toFixed();|
|toPrecision();|
---
## Number();
> this will show u the number option from string
var a = "100";
var b = Number(a);
document.write(b + 20);
```javascript
var a = "100";
var b = Number(a);
document.write(b + 20);
```
---

## parseInt();
>parseint can not show the dicimal number if this contain 3 to 4 value it may show the first value
```javascript
var c = "10,20,30.40";
var d = parseInt(c);
document.write(d);
```
---

## ParseFloat();
>this is oposite brother of parseint becous this may contain decimal number too and this may contain 2 to 3 value
```javascript
var e = "10.30";
var f= parseFloat(e);
document.write(f);
```
---

## isFinite();
> this may wants the finite value its mean if u have a number value then this will show u true and if not then is show u false
```javascript
var h = "10.30";
var i= Number.isFinite(h);
document.write(h);
```
---

## isInteger();
> it may find the integer i think thas is the same as parsint becouse its may could not contain the decimal
```javascript
var j = "10.30";
var k =  Number.isInteger(j);
document.write(k);
```
---

## toFixed
> to fixed value is to fixed with more number that are after point
```javascript
var l = 5.36789;
var m = l.toFixed(2);
document.write(m);
```
---

## toprecision();
>if u want mare 0 zaros after desimal then us this method
```javascript
var n = 10.4590;
var o = n.toPrecision(4);
document.write(o);
```
---
## The End Number Method