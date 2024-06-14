document.write("<center><h1>object<h1><center>");
document.write("<br>");
var a = {
    firstName : "Arbaaz",
    lastName : "Chouhan",
    bortherName : "Adnan",
famliy : {
   fatherName :"mo.Aslam",
   motherName:"famida chouhan",
   bortherName:"Adnan chouhan"
},
selary:function(){
    return 25000;
},
fullName:function(){
    return this .firstName + " " + this.lastName
},

}; 
console.log(a.fullName());
console.log(a.selary);
console.log(a.famliy.fatherName);
console.log(a.firstName);
