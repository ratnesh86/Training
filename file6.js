//console.log(this);

function entity(a,b)
{
    console.log(this);
    this.a=a;
    this.b=b;
}

entity.prototype.display = function()
    {
        console.log(this.a+" " + this.b);
    }

    var obj1 = new entity(12,34);
    var obj2=new entity(34,34);

    obj1.display();
    obj2.display();