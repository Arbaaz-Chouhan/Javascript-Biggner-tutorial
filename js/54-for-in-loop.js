document.write("<center><h1> FOR IN LOOP<h1><center>");
var obj = {
    firstname : "Arbaaz",
    lastname : "chouhan",
    age : 16,
}
for(var key in obj){
    document.write( key +" : " +obj[key] + '<br>');
};