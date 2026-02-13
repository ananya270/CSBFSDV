import React from "react";
import "./Studenticard.css";

function Studenticard({ sdata }) {
  return (
           <div className="container" >
        <img src={sdata.image} height={200} width={100} style={{borderRadius:"50%"}} />
        <h2> Name: {sdata.sname} </h2>
        <h2>Roll:{sdata.sroll}</h2>
        <h2>Branch: {sdata.sbranch}</h2>
        <h2>Section: {sdata.ssection}</h2>
    </div>
  );
}

export default Studenticard;
