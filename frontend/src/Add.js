import React from "react";
import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"
import axios from "axios";

const Add=()=>
{
    
    const [title, settitle] = useState(""); 
    const [year, setyear] = useState(""); 
    const [rating, setrating] = useState(""); 
    const [genre, setgenre] = useState(""); 
     

    const addSeller = ()=>{

      axios.post("http://localhost:3001/Add", {
        title,
        year,
        rating,
        genre,
        
      }).then(
        alert("add successfully!")
        )
    }

    return(
       <>
        <div className="main-div">
        <div className="center">
        <br/>
          <br/>
          <input  type="text" placeholder="Shop Name" onChange={(event)=>{settitle(event.target.value)}} ></input>
          <br/>
          <input  type="text" placeholder="Shop Owner"  onChange={(event)=>{setyear(event.target.value)}}></input>
          <br/>
          <input className="twoFields"  type="text" placeholder="Niche" onChange={(event)=>{setrating(event.target.value)}} ></input>
          <br></br>   
          <input className="username"  type="text" placeholder="Address" onChange={(event)=>{setgenre(event.target.value)}} ></input>
          <br/>
          <button type="button" onClick={addSeller}> Add </button>
          </div>

          

        </div>
       </>
           );
};

export default Add;