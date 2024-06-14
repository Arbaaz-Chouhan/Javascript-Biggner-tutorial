var ary = [
    ["Arbaaz", 18,"male","BCA"],
    ["Adnan", 19,"male","B.COM"],
    ["Anis", 20,"male","BCA"],
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

