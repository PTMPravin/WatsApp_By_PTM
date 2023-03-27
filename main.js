const express = require("express");
//const { Socket } = require("socket.io");

const app = express();

const http = require("http").createServer(app);
const path = require("path");


const io = require("socket.io")(http);

//Route
// app.use("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"/public/"));
//     console.log("__Dir-Name : "+__dirname);
// });

app.use(express.static(path.join(__dirname,"/public/")));

//Socket Connection
io.on("connection",function(socket){

        console.log("User Will Be Connected");
        console.log(socket.id);

        socket.on("message",(message)=>{
            console.log("Message From Client : "+message);
        });

    // socket.to("")
    console.log("Name : ");

    socket.on("disconnect",()=>{
        console.log("User Will Be DisConnected");
    });

});

//Port
http.listen(2727,()=>{
    console.log("Server Started At Port Number 1414")
});