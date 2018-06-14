var a=20;
const b = 45;

function test()
    {
        let a = 30;             //function scoped variable
        console.log("inside" + a);
            {
                    let a = 45;
                    console.log("Within block" + a);
            }
        console.log("outside block" + a);
    }

    test();

    for (let a = 5;a<40;a++)
        {

        }

    console.log(a);