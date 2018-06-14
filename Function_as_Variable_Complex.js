function callthis(p,q,r)                                        //p is "Chris". q is function(a), r is function(b)
{
    q(greet(p));                                                //q is the function used which in turn is calling greet function with argument p
    r(greet(p));                                                //r is the function used which in turn is calling greet function with argument p
}

function greet(j)
{
    return "Hello!!!! Greet Function" + j;
}

callthis("Chris",                                                   //first argument
        function(a)
        {
            console.log("Hey Callthis Function(a)"+a);                 //2nd argument as function
        },                                  
        function(b)
        {
            console.log("Hey Callthis function(b)" + b);                   //3rd argument as function
        }
);