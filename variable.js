var a= 23;
var b = true;
var c = 'ram';
var d = [21,3,4,"Ratnesh"];
var e = function()
    {
        console.log("This is a function variable e");
    }

function check_Array(z)
    {
    z[2]=z[1]+z[0];
    z[7]=133;
    }

console.log (a+" "+b+" "+c+" " + d[2]);
e();// function call

var p = [12,21,33,44];

console.check_Array(p);
console.check_Array(p[2]);