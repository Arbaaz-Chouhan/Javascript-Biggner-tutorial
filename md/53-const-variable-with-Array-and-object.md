# Const variable with Array and object
[JS-FILE](../js/53-const-variable-withe-Array-and-object.js)
---
 >now we talk abut constant varible (const) you all know that const is a saperate variable that cannot be a second time usable now question is how to use constant variabe in array and object ? now i tel u how can we use const in array or object

# Array 
```javascript
const a = [10,20,30,40];
a[0] = 15;
a[1] = 25;
console.log(a);

```
> in this if u asign second time there have a error and ur command wil not work becouse of we can not direct assign a const for 2nd time but we have special trick to do what we want (a[1] = 23) in this we are saying that a array index change value to 23 form 20 and its work same with object

# object
```javascript
const b = {
    name :"Arbaaz",
    age :16
};
b.name = "Fayyaz";
b.age = 17;
console.log(b);
 
```
> this is object same as compere of array

## the and