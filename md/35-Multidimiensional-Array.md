# MULTIDIMENSIONL ARRAY
[JS-FILE](../js/%2035-Multidinmensionl-Array.js)
---
>if u want to make a table in arrays then use this mutidimantional array so the pattern is 
```javascript
var ary = [
    ["Arbaaz", 18,"male","BCA"],
    ["Adnan", 19,"male","B.COM"],
    ["Anis", 20,"male","BCA"],
    ["Danis", 21,"male","B.A"],
    ["Danis", 21,"male","B.A"]

];
document.write(ary.length);
 document.write("<table border : '1px ' cellspacing= '0' > ");
for( var a = 0; a< 4; a++){
    document.write("<tr>");
for(var b = 0; b < 4; b++) {   
    document.write("<td>"+ary[a][b] + "<td>");
}
document.write("</tr>");
}
document.write("</table>");

```
## the and