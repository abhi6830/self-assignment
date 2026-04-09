const express = require("express");
const app = express();

app.set("view engine", "ejs");

const students = [
    {id:1, name:"Rahul", m1:78, m2:82, m3:90},
    {id:2, name:"Priya", m1:88, m2:76, m3:85}
];

app.get("/students", (req,res)=>{
    res.render("student",{students:students});
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});