function callme(p)
{
    p("Europe");
}

function changeMe(q)
    {
        q("London");
    }

class Continent{
    constructor()
        {
            this.value = "Asia";
        }
    changeContinent()
        {
            changeMe(function(data)
                {
                    this.value=data;
                    
                }.bind(this));


 /*           changeMe(function(data)
                {
                    this.value=data;
                    
                }.bind(this));
*/


//            changeMe((data)=>this.value=data);              //ES6


        }

        display()
            {
                console.log(this.value);
            }
}

var obj = new Continent();
obj.display();
obj.changeContinent();
obj.display();
//obj.changeMe();
obj.display();