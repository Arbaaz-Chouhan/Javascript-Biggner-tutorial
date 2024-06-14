function fullName(fname,lname){
var a = fname + " " +    lname;

return a;
}
 
var fn = fullName("adnan","arbaaz");
document.write(fn);
document.write("<br>");


function sum(eng,math,sc){
    var s = eng + math + sc;

return s;
}

function percentage(tt){
    var per = tt/300 * 100
    document.write(per);
}


var total = sum(55,70,80);
percentage(total); 
