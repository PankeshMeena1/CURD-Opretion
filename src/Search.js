import axios from "axios";
import { useState } from "react";
import Studisplay from "./Studisplay";

const Search=()=>
{
    const[Rollno, setrollno]=useState("");
    const[studata, setstudata]=useState([]);
    const handlesubmit=()=>
    {
        axios.post("http://localhost:8000/stusearch", {Rollno:Rollno})
        .then((res)=>{
            setstudata(res.data);
        })
    }
    const mydata =studata.map((key)=><Studisplay 
    
    rno={key.Rollno} 
    nm={key.Name}
    cty={key.City}
    fees={key.Fees} 
    
    />);
    return(
        <>
    
          <h1>Search Studnet Recourd</h1>

          Enter Rollno : <input type="text"name="Rollno"
           onChange={(e)=>{setrollno(e.target.value)}}/>
          <br/>
          <button onClick={handlesubmit}>Data Search</button>
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
export default Search;