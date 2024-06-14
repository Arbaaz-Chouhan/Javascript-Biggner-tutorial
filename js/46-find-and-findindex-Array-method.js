document.write("<center><h1>FIND ARRAY METHOD </h1><center>")
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");
var b = ages.find(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}

document.write("<center><h1>FINDINDEX ARRAY METHOD </h1><center>")
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");
var b = ages.findIndex(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
