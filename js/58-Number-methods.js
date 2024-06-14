document.write("<center><h1>NUMBER METHODS</h1><center>");
document.write("<br>");


document.write("<h1>Number<h1>");
var a = "100";
var b = Number(a);
document.write(b + 20);
document.write("<hr>");


document.write("<h1>parseInt<h1>");
var c = "10,20,30.40";
var d = parseInt(c);
document.write(d);
document.write("<hr>");


document.write("<h1>parseFloat<h1>");
var e = "10.30";
var f= parseFloat(e);
document.write(f);
document.write("<hr>");


document.write("<h1>isFinite<h1>");
var h = "10.30";
var i= Number.isFinite(h);
document.write(h);
document.write("<hr>");


document.write("<h1>isInteger<h1>");
var j = "10.30";
var k =  Number.isInteger(j);
document.write(k);
document.write("<hr>");


document.write("<h1>toFixed<h1>");
var l = 5.36789;
var m = l.toFixed(2);
document.write(m);
document.write("<hr>");


document.write("<h1>toPrecision<h1>");
var n = 10.4590;
var o = n.toPrecision(4);
document.write(o);
document.write("<hr>");
