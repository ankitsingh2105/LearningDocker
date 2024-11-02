import express from "express";
const app = express();

app.listen(3000, ()=>{
    console.log("server is running");
})

app.get("/" , (req , response)=>{
    response.send("api is working");
})