var http=require('http');
http.createServer(function(request,response)
{
    console.log("server is running");
    response.write("hi.Rtnesh");

    response.end();


}).listen(44000);