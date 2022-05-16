import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/landingPage.css'
const landingPage = () => {
  return (
    <div className="col fondo">
      
    <img className="img-fluid" src="https://xkcd.com/s/0b7742.png" alt="" />
     
<label className="startL"><Link to={'/Home'}>Ingresar</Link></label>
</div>
  )
}

export default landingPage
