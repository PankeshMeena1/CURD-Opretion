
const stumodel = require ("../module/employeemodel");

const studata1 =( req, res)=>
{
     stumodel.find().then((data)=>{
        res.send(data)
     })
}
const stusave =(req, res)=>
{
    const mydata = stumodel(req.body);
    const mydata1 = stumodel(req.file);
    
    mydata1.save()
        
    mydata.save().then(()=>{console.log("Data Save !!!")})
}
const stuSearch=(req, res)=>
{
       stumodel.find(req.body).then((data)=>{
           res.send(data);
       });  
}
const stuDelete =(req, res)=>
{
       stumodel.findByIdAndDelete(req.params.id).then((data)=>{
         res.send(data);
       });
}
const stuEdit=(req, res)=>
{
    stumodel.findById(req.params.id).then((data)=>{
         res.send(data);
    })
}
const stuEditsave=(req, res)=>
{
    stumodel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
               res.send(data);
    })
}

module.exports={
    studata1,stusave,stuSearch,stuDelete,stuEdit,stuEditsave
}
