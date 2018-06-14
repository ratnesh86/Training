function callthistoo(p)             //this uses the first argument
{
    console.log(p);
    

    return function(q)              //this uses the 2nd argument. 
    {
        console.log(q);             //this function will not be available in firt function
        console.log(p);         
    }
}

callthistoo("Broad")("France");    //two arguments are sent to callthistoo