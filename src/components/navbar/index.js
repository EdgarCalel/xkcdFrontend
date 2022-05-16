import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <label className="navbar-brand startLink"><AutoAwesomeIcon /><Link to={'/'}>xkcd Comic</Link></label>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar