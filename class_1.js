class Student
{
    constructor(sno,name)
        {
            this.sno = sno;
            this.name = name;
        }

    sum()
        {
            this.sno=this.sno+this.sno;
        }

    display()
        {
            console.log(this.sno+ " " + this.name);
        }
}


var obj1 = new Student(12,"Ratnesh");
var obj2=new Student(13,"Manoj");

obj1.sum();

obj1.display();
obj2.display();
