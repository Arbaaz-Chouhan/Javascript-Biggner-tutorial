# LOGICAL OPERATORS IN JAVASCRIPT
[JS-FILE](../js/13-logical-opertors-in-javascript.js)
---
>if we want 2 or more value to run in one condition then use logicla operator in other we have to true the usable value if they are true then they work but if we use logical operator then they are not important for our condition there are three types of logical operator

|operator|Name       |
|--------|---        |
|    &&  |logical and|
|  \|\|  | logical or|
|   !|logical not
> we test threse in console.log
# 1st logical and
> in logical and operater we want all the values true if there are one false and 1 true then logical opertor not works
```javascript
var age = 20;
if(age >= 18 && age <= 21){  
      console.log("yes you are eligible")
}
```
---
# 2nd logical or
```javascript
var a = 10;
var b = 15;
if(a >= 8 || b <= 14){
    console.log("yes you are eligible")
}
```
---
# 3rd logical not
> logical not operator gives us a oposite value if our answer is true logical not show us false becouse the opertor work for oposite direction
```javascript
var a = 30;
var b = 20;
console.log(!a >=12);
```
---
## the and
