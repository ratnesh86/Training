global=function()
{
    console.log("Global function is running");
}

constant={pf:0.07,hra:0.09,it:0.03};

class Student{
                constructor(sno,name)
                    {
                        this.sno=sno;
                        this.name=name;
                    }
                display()
                    {
                        console.log(this.sno+" " + this.name);
                    }
              }

module.exports={
                global:global,                                      //export the global
                constant:constant,                                //export the constant
                Student:Student                                     //export the entire class name and not the object of the class
                }