import React from 'react'
import Profile from './Profile'
import './gallery.css'


function Gallery() {
  const student=
  [{
    pic:"https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
    myname:"Nnya",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:"https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
    myname:"Ansh",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:"https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
    myname:"Ankit",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  }
]
  




  return (
    <div>
      {/* <div><Profile name="Ankit Yadav" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div> */}
      {/* <div><Profile/></div> */}

      {/* <Profile data={student}/>       */}

      {
        student.map((item,index)=>{
          return <Profile key={index} data={item}/>
        })
      }
    </div>
  )
}

export default Gallery