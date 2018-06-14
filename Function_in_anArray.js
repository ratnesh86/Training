var obj=[23,                        //This is an array. 1st element is an integer
        45,                         // 2nd elemnt again an integer
        "Ratnesh",                  //3rd element is string
        function()                  //4th element is a function printing "Running"
            {
                console.log("Running");
            },
        [12,22,function()           //5th element is again an array which again consists of two integers and then a function    
            {
                console.log("Flying");
            }]
    ]

obj[3]();                           //accessing the first function to print Running
obj[4][2]();                        //accessing the array within array on 5th element to print Flying
console.log(obj[1]);