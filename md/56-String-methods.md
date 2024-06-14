# STRING METHOD 
[JS-FILE](../js/56-String-methods.js)
---

|string|
|-----|
|length|
|toLowerCase|
|toUpperCase|
|include|
|startsWith|
|endsWith|
|search|
|match|
|indexOf|
|LastindexOf|
|replace|
|trim|
|charAt|
|charCodeAt|
|fromCharCode|
|concat|
|split|
|repeat|
|slice|
|substr|
|substring|
|toString|
|valueOf|

# 1-length
>this is property that only find the lenght of string it means this can count all string property and one more thing that length can count space too
```javascript
var a ="My Name  is Arbaaz chouhan";
var b = a.length;
document.write(b);
```
---
# 2-toLowerCase();
> this method is usefull when u want to write all string latter in small latter
```javascript
var b ="My Name  is Arbaaz chouhan";
var c = a.toLowerCase();
document.write(c);
```
---
# 3-toUpperCase();
> this method is usefull when we want to make our all string latter in capital form
```javascript
var c ="My Name  is Arbaaz chouhan";
var d = c.toUpperCase();
document.write(d);
```
---
# 4-includes();
> includes show us that the value we want to see is available or not if vailable then this show us true otherwise false
```javascript
var d ="My Name  is Arbaaz chouhan";
var e = d.includes("Arbaaz");
document.write(e);
```
---
# 5-startsWith();
>this will show u what value u want to see is available or not at starting or not if have then show true othervise false
```javascript
var e ="My Name  is Arbaaz chouhan";
var f = e.startsWith('My Name');
document.write(f);
```
---
# 6-endsWith();
> this will show u what u want to see is avalaible or not at end pint if then this show true othervise false
```javascript
var f ="My Name  is Arbaaz chouhan";
var g = f.endsWith('chouhan');
document.write(g);
```
---
# 7-search();
> this will show u the correct index of ur string what are u searching is this is same as same include but include show us true or false but this show us a index of the word
```javascript
var g ="My Name  is Arbaaz chouhan";
var h = g.search('chouhan');
document.write(h);
```
---
# 8-match();
> this will make new array of duplicate words like what u want to see one more thing in tis we not use opening dots we use (forword slash like this and speacialy of g (g) is a special word that find a word globally like this (a.match(/i/g) )
```javascript
var h ="My Name  is Arbaaz is chouhan";
var i = h.match(/is/g);
document.write(i);
```
---

# 9-indexOf();
> this will help u to find index of ur word that u want to see like this
```javascript
var i ="My Name  is Arbaaz chouhan";
var j = i.indexOf('is');
document.write(j);
```
---
# 10-LastindexOf();
> this will help u to find index of ur word that u want to find but from backside
```javascript
var j ="My Name  is Arbaaz chouhan";
var k = j.lastIndexOf('chouhan');
document.write(k);
```
---
# 11-replace();
> this will help u to replace ur word with another word but this contain two type of parameter (replace from , replace with)
```javascript
var k ="My Name  is Arbaaz chouhan";
var l = k.replace("Arbaaz", 'Adnan');
document.write(l);
```
---

# 12-trim();
> this will help u to trim extra spaces like if u added more then space u want then use it
```javascript
var l ="          Arbaaz        ";
var m = l.trim();
alert(m);
```
---