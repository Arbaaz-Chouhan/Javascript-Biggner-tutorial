document.write("<center><h1>SRING METHODS</h1><center>");
document.write('<br>');
document.write("<h1>1-String length<h1>");
var a ="My Name  is Arbaaz chouhan";
var b = a.length;
document.write(b);
document.write("<hr>");

document.write("<h1>2-String toLowerCase <h1>");
var b ="My Name  is Arbaaz chouhan";
var c = a.toLowerCase();
document.write(c);
document.write("<hr>");

document.write("<h1>3-String toupperCase <h1>");
var c ="My Name  is Arbaaz chouhan";
var d = c.toUpperCase();
document.write(d);
document.write("<hr>");

document.write("<h1>4-String includes <h1>");
var d ="My Name  is Arbaaz chouhan";
var e = d.includes("Arbaaz");
document.write(e);
document.write("<hr>");

document.write("<h1>5-String startsWith <h1>");
var e ="My Name  is Arbaaz chouhan";
var f = e.startsWith('My Name');
document.write(f);
document.write("<hr>");

document.write("<h1>6-String endsWith  <h1>");
var f ="My Name  is Arbaaz chouhan";
var g = f.endsWith('chouhan');
document.write(g);
document.write("<hr>");

document.write("<h1>7-String search  <h1>");
var g ="My Name  is Arbaaz chouhan";
var h = g.search('chouhan');
document.write(h);
document.write("<hr>");

document.write("<h1>8-String match  <h1>");
var h ="My Name  is Arbaaz is chouhan";
var i = h.match(/is/g);
document.write(i);
document.write("<hr>");

document.write("<h1>9-String indexOf  <h1>");
var i ="My Name  is Arbaaz chouhan";
var j = i.indexOf('is');
document.write(j);
document.write("<hr>");

document.write("<h1>10-String lastindexOf <h1>");
var j ="My Name  is Arbaaz chouhan";
var k = j.lastIndexOf('chouhan');
document.write(k);
document.write("<hr>");

document.write("<h1>11-String replace <h1>");
var k ="My Name  is Arbaaz chouhan";
var l = k.replace("Arbaaz", 'Adnan');
document.write(l);
document.write("<hr>");

document.write("<h1>12-String trim <h1>");
var l ="          Arbaaz        ";
var m = l.trim();
alert(m);
document.write("<hr>");







