var object = {sno:12,name:"Ram",city:"Bangalore"};
object.age = 45;
object.skills=['Java','C++',"Javascript"];                  //single quote / double quote doesn't matter

object.print=function()
    {
        console.log(this.name + " "+ this.city);            
    }

var obj = [234,
            45,
            "Robert",
            function()
                {
                console.log("Running");
                },
            function()
                {
                console.log("Walking");
                },
            [12,
                23,
                function()
                    {
                    console.log("Flying");
                }
    ],
    object]

    obj[3]();
    obj[4]();
    obj[5][2]();
    obj[6].print();

    console.log(obj[6].skills);