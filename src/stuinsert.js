import axios from "axios";
import { useState } from "react";

const Stuinsert =()=>
{
const[input, setinput]=useState({});

const handleinput=(e)=>
{
    let name = e.target.name;
    let value = e.target.value;

    setinput(values=>({...values, [name]:value})); 
}

const loaddata=()=>
{
     axios.post("http://localhost:8000/stusave", input).then(alert("data save !!!"));
}

    return(
        <>
       <div id="input">
        <h1>Student Information Form</h1>
    <div id="input1">
      Enter Rollno : <input type="text"  name="Rollno"
      value={input.Rollno} onChange={handleinput} />
      Enter Name   : <input type="text"   name="Name"
      value={input.Name} onChange={handleinput} />
      Enter City   : <input type="text" name="City" 
      value={input.City} onChange={handleinput} />
      Enter Fees   :  <input type="text"  name="Fees" 
      value={input.Fees} onChange={handleinput} id="fees" />
       <button id="btn" onClick={loaddata}>Data Save</button>
    </div>
   </div>
        </>
    );
}

export default Stuinsert;
