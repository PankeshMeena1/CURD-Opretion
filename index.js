const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


mongoose.connect("mongodb://127.0.0.1:27017/Studentdata").then()
 
app.use(express.json());
app.use(cors());
const stualldata = require ("./controler/employeecontroler");

app.get("/", stualldata.studata1);

app.post("/stusave", stualldata.stusave);

app.post("/stusearch", stualldata.stuSearch);

app.get("/studelete/:id", stualldata.stuDelete);

app.get("/stuedit/:id", stualldata.stuEdit);

app.post("/editsave/:id", stualldata.stuEditsave);


app.listen(8000, (req, res)=>{
    console.log("your server is runneble on 8000 !!")
});

