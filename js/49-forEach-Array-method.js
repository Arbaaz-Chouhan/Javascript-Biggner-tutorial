document.write("<center><h1>FOREACH ARRAY METHOD<h1><center>");
var a =["Arbaaz","Adnan","Ayyaz","Arman"];
a.forEach(function(value , index){
    document.write( index + " : " +value +"<br>");

})