function Class(sno,name)
    {
        this.sno = sno;
        this.name = name;
    }

    Class.prototype.display=function()
        {
            console.log(this.sno+" " + this.name);
            return  {
                    chain: function()
                        {
                            console.log("This is a function");
                        }
                    }
        }

    var obj=new Class(12,"Ratnesh");
    obj.display().chain();              //this means there is a function display which has a return value as another function chain

//alternatively above statement can be written in two statements as below

    var x = obj.display();
    x.chain();