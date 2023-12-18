const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require ("multer");
const path  = require("path");


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

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
       cb(null, "public/images")
    },
    filename: (req, file, cb)=>{
        cb(null, file.filename+"_"+Date.now()+path.extname(file.originalname))
    }
});

const upload =multer({
     storage: storage
})
 
app.post("/stuupload", upload.single("file"),(req, res)=>{
       console.log(req.file);  
});

app.listen(8000, (req, res)=>{
    console.log("your server is runneble on 8000 !!")
});

