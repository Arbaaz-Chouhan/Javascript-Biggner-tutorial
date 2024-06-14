document.write("<center><h1>SOME ARRAY METHOD </h1><center>")
var ages = [10,14,17,18,20];
document.write(ages +"<br><br>");
var b = ages.some(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
document.write("<center><h1>EVERY ARRAY METHOD </h1><center>")
var ages = [20,19,21,18,24];
document.write(ages +"<br><br>");   
var b = ages.every(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}