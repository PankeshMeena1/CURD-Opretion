import axios from "axios";
import { useEffect, useState } from "react";
import myimg from "./del.jpeg";
import myimg1 from "./edit.jpeg";

const Edit =()=>
{
    const [studata, setstudata]=useState([]);

    const [myData, setmydata]=useState({});

    const loaddata =()=>
    {
        axios.get("http://localhost:8000/").then((res)=>{
             setstudata(res.data);
        });
    }

    useEffect(()=>{
        loaddata();
     }, []);
 
    const myEdit =(id)=>
    {
        axios.get(`http://localhost:8000/stuedit/${id}`).then((res)=>{
            setmydata(res.data);
        })
    }

     
    const handleinput=(e)=>
    {
       let name = e.target.name;
       let value = e.target.value;

       setmydata(values=>({...values, [name]:value}));

    }
    const editsave=()=>
    {
        axios.post(`http://localhost:8000/editsave/${myData._id}`, myData)
        .then((res)=>{
            loaddata();
        });
        

    }

   
    const mydata = studata.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.Rollno}</td>
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.Fees}</td>
                <td>
                 <a href="#" onClick={()=>myEdit(key._id)} >   
                <img src={myimg1}  width="40px" height="40px"/> 
                </a>
                </td>
                <td>
                <img src={myimg}  width="40px" height="40px"/>
                </td>
              </tr>
            </>
         );
    });
    

    return(
        <>
       <div id="display">
        <h1> Edit Student Recourd </h1>  
         <table style={{backgroundColor:"aqua", margin:"auto", border:"2px solid black", }}>
         
         <tr style={{backgroundColor:"azure", color:"red"}}>
            <td >Rollno</td>
            <td>Name</td>
            <td>City</td>
            <td>Fees</td>
            <td>Edit</td>
            <td>Delete</td>
           
         </tr>
         {mydata}
         </table>
         </div>
         <div id="input">
        <h1>Edit Student Recourd</h1>
    <div id="input1">
      Enter Rollno : <input type="text"  name="Rollno"
      value={myData.Rollno} onChange={ handleinput} />
      Enter Name   : <input type="text"   name="Name"
      value={myData.Name} onChange={ handleinput} />
      Enter City   : <input type="text" name="City" 
      value={myData.City} onChange={ handleinput} />
      Enter Fees   :  <input type="text"  name="Fees" 
      value={myData.Fees} onChange={ handleinput} id="fees" />
       <button id="btn" onClick={editsave}>Data Update !</button>
    </div>
   </div>
        </>
    );
}

export default Edit;