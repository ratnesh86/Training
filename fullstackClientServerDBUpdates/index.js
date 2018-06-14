var express=require('express');
var bodyParser=require("body-parser");
var path=require('path');
var fileupload=require('express-fileupload');                           
var dbroutes=require('./routes/dbroutes');                      //importing the exported routes under routes


var app=express();
var fs=require("fs");


//for parsing the incoming requests
app.use(bodyParser.urlencoded());

//parse the file that is to be uploaded
app.use(fileupload());

//to join a route
app.use("/dbroutes",dbroutes);

//to create a listener
app.listen(4510,function()
    {
        console.log('server is running on 4510');
    });

app.get('/',function(request,response)
{
    response.sendFile(__dirname+"/public/views/first.html");
    
});

app.get("/home",function(request,response)
{
//    response.send("HOMEPAGE");
    response.sendFile(__dirname+"/public/views/index.html");
});

app.post("/store",function(request,response)
{
    if (request.files)                                  //this works only when app.use(fileupload()); is present
        {
            let regex = /\.(doc|docx|pdf)$/;
            console.log("File present "+request.files.resume.name);             //resume is the name of the file variable given in the index.html 
            let filename = request.files.resume.name;
            if (regex.test(filename))
                {
                
                request.files.resume.mv("resumes/"+filename,function(err)
                    {
                        if(err)
                            {
                                response.send("resume not stored and so is the data");
                            }
                        else
                            console.log("File has been uploaded & the data has been stored");
                    })
                }
            else
                console.log("filename not doc, docx or pdf, so can't uploade");
        }
    var sno=request.body.sno;
    var name = request.body.name;
    var city = request.body.city;
    var obj={sno:sno,name:name,city:city};
    obj=JSON.stringify(obj);
    fs.appendFile("data/info.txt",obj,function(err)
        {
            if(err)
                response.send("data not stored");
            response.send("Data stored in the file");
        });

})

//static file paths
app.use(express.static(__dirname+'/public/styles'));
app.use(express.static(__dirname+"/public/scripts"));
app.use(express.static(__dirname+"/bower_components"));
app.use(express.static(__dirname+'/public/amodule'));

app.get("/restclient",function(request,response)
{
    response.sendFile(__dirname+"/public/views/angular.html");
   
});