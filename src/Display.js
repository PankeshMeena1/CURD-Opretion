import axios from "axios";
import { useEffect, useState } from "react";
import Studisplay from "./Studisplay";

const Display =()=>
{
    const [studata, setstudata]=useState([]);

    const loaddata =()=>
    {
        axios.get("http://localhost:8000/").then((res)=>{
             setstudata(res.data);
        });
    }
    useEffect(()=>{
       loaddata();
    }, []);

    const mydata = studata.map((key)=> <Studisplay
          
            rno={key.Rollno} 
            nm={key.Name}
            cty={key.City}
            fees={key.Fees} 
            imge={key.img}
    />);

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
         </tr>
         {mydata}
         </table>
         </div>
        </>
    );
}

export default Display;