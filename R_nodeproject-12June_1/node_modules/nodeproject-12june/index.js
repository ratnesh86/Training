var lib=require('./lib');

var obj = new lib.Student(12,"Ratnesh");

obj.display;

lib.global();

console.log(lib.constant);

home=function()
    {
        console.log("This function runs in home page");
    }

const app="Global node package";

module.exports={
    home:home,                                      //exporting home
    appname:app,                                    //exporting appname as app
    lib:lib                                         //exporting lib which we imported from lib
}

module.exports.version="1.0.0";                     //Anything additional to be exported from above block should be exported as object of module.exports