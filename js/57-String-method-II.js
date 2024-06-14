document.write("<center><h1>STRING METHODS II </h1><center>");
document.write("<br>")
document.write("<h1>13-charAt<h1>");
var a = "My Name  is Arbaaz chouhan";
var b = a.charAt(10);
 document.write(b);
 document.write("<hr>");

 document.write("<h1>14-charCodeAt<h1>")
var b = "My Name  is Arbaaz chouhan";
var c = b.charCodeAt(4);
document.write(c);
document.write("<hr>");


document.write("<h1>15-fromCodeAt<h1>");
var d = String.fromCharCode(110);
document.write(d);
document.write("<hr>");

document.write("<h1>16-concat<h1>");
var e =  "My Name  is Arbaaz chouhan";
var f = "Adnan chouhan"
var g = e.concat(f);
document.write(g);
document.write("<hr>");


document.write("<h1>17-split<h1>");
var h =  "My Name  is Arbaaz chouhan";
var i = h.split("i")
document.write(i);
document.write("<hr>");


document.write("<h1>18-repeat<h1>");
var j =  "My Name  is Arbaaz chouhan";
var k = j.repeat(2);
document.write(k);
document.write("<hr>");


document.write("<h1>19-slice<h1>");
var l =  "My Name  is Arbaaz chouhan";
var m = l.slice(7);
document.write(m);
document.write("<hr>");

document.write("<h1>20-substr<h1>");
var n =  "My Name  is Arbaaz chouhan";
var o = n.substr(7,10);
document.write(o);
document.write("<hr>");


document.write("<h1>21-substring<h1>");
var p =  "My Name  is Arbaaz chouhan";
var q = p.substring(7,15);
document.write(q);
document.write("<hr>");

document.write("<h1>22-toString<h1>");
var r = 20;
var s= r.toString();
document.write(s + 20);
document.write("<hr>");

document.write("<h1>23-valueOf<h1>");
var t =  "My Name  is Arbaaz chouhan";
var u = t.valueOf();
document.write(u);
document.write("<hr>");















