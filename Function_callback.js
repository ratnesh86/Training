function callme(p)
{
console.log("Functiona line1");
p("Workd","India");
console.log("Functional like3");

}

callme(function(a,b)
{
    console.log("this is called back");
    console.log("a value is : " + a);
    console.log("b value is : "  + b);
}
);