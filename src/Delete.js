import axios from "axios";
import { useEffect, useState } from "react";
import myimg from "./del.jpeg";

const Delete =()=>
{
    const [studata, setstudata]=useState([]);

    const loaddata =()=>
    {
        axios.get("http://localhost:8000/").then((res)=>{
             setstudata(res.data);
        });
    }
    const myDel =(id)=>
    {
        axios.get(`http://localhost:8000/studelete/${id}`).then((res)=>{
          loaddata();
        });
    }

    useEffect(()=>{
       loaddata();
    }, []);

    const mydata = studata.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.Rollno}</td>
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.Fees}</td>
                <td>
                <a href="#" onClick={()=>myDel(key._id)} >
                <img src={myimg}  width="40px" height="40px"/>
                </a>
                </td>
              </tr>
            </>
         );
    });
    

    return(
        <>
       <div id="display">
        <h1> Student Data Display </h1>  
         <table style={{backgroundColor:"aqua", margin:"auto", border:"2px solid black", }}>
         
         <tr style={{backgroundColor:"azure", color:"red"}}>
            <td >Rollno</td>
            <td>Name</td>
            <td>City</td>
            <td>Fees</td>
            <td>Delete</td>
         </tr>
         {mydata}
         </table>
         </div>
        </>
    );
}

export default Delete;