document.write("<center><h1>MAP ARRAY METHOD <h1><center>");
var ary =[10,20,11,15,16];
var b = ary.map(test);
document.write(b + '<br><br>');

function test(x){
    return x * 10;

} 
//Array of object
var a = [
    {fname :"Arbaaz", lname : "chouhan"},
    {fname :"Adnan",  lname : "chouhan"},
    {fname :"Danis",  lname : "chouhan"}
    
];

var b = a.map(Name);
document.write(b);

function Name(z){
    return z.fname+ " "+ z.lname + "<br>";
};

 