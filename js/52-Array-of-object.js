document.write("<center><h1>ARRAY OF OBJECT<h1><center>");

var student =[
    {name : 'Arbaaz' ,age : 16},
    {name : 'Adnan' ,age : 18},
    {name : 'Fayyaz' ,age : 19},

];
console.log(student);
 for(var a = 0; a <= student.length; a++){
document.write(student[a].name + " " +  student[a].age+ "<br>" );
 }
