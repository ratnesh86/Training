//how to connect with database. 

var express=require('express');
var route=express.Router();

var tasks=require('../database/tasks');

route.get("/people",function(request,response)
    {
        tasks.getAll(function(err,data)
        {
            if(err)
                response.render("table",{data:[]});
            else
                response.render("table",{dta:data});
        });
    });

    route.post("/addpeople",function(request,response)
    {
        let person={
            sno: request.body.sno,
            name: request.body.name,
            city: request.body.city
        }
        tasks.addPerson(person,function(err,data)
        {
            if(err)
                response.send("row failed to be inserted");
            response.send("row added");
        });
    });
    module.exports=route;