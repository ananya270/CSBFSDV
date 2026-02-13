import React from 'react'
import Studenticard from './Studenticard'

function Gallery() {
    const student = [
    {
      pic:"https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80",
      sname: "nnya",
      sroll: "101",
      sbranch: "CSE",
      ssection: "A"
    },
      {
      pic:"https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80",
      sname: "nnya",
      sroll: "101",
      sbranch: "CSE",
      ssection: "A"
    },
      {
      pic:"https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80",
      sname: "nnya",
      sroll: "101",
      sbranch: "CSE",
      ssection: "A"
    },
      {
      pic:"https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740&q=80",
      sname: "nnya",
      sroll: "101",
      sbranch: "CSE",
      ssection: "A"
    }
  ]
  return (
    <div>
       <div>
     {/* <Studenticard sname="nnya" sroll="101" sbranch="CSE" ssection="A"/> */}
        {/* <Studenticard sdata={student} />
         <Studenticard sdata={student} /> */}
         {
          student.map((ele)=>(
            <Studenticard sdata={ele} />
          )
          )}
  
      </div>

    </div>
    
    
  )

}

export default Gallery