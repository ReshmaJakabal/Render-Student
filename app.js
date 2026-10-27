const express = require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"Student API running successfully",
        environment: process.env.NODE_ENV || "development"
    });
      });

    app.get("/health",(req,res)=>{
        res.status(200).json({
            status: "OK"
        });
  });

app.get ("/students",(req,res)=>{
    const students = [
        {id:1, name:"Akash",course:"Node.js"},
        {id:2, name:"Rahul",course:"Java"},
        {id:3, name:"Swetha",course:"Python"},

    ];
    res.json(students);
});

app.post("/students",(req,res)=>{
    const {name,course}= req.body;
    res.status(201).json({
        message: "Students recieved sussessfully",
        student:(name,course)
    })
});

const port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",()=>{
    console.log("Server running..")
})