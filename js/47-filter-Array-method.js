document.write("<center><h1>FILTER ARRAY METHOD </h1><center>")
var ages = [10,14,17,40,30,18,20];
document.write(ages +"<br><br>");
var b = ages.filter(checkAdult);
document.write(b+"<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
