import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  return (
    <div className='navbar bg-warning'>
      <div className='container'> 
        <div className="logo">
          <a href="/"><img src={require("./logo.png")} alt="" srcset="" width={100} /></a>
        </div>
        <div className="d-flex">
          <Link className="text-decoration-none text-dark" to="/?cat=art">
            <h6 className='p-2'>ART</h6>
          </Link>
          <Link className="text-decoration-none text-dark" to="/?cat=sciennce">
            <h6 className='p-2'>SCIENCE</h6>
          </Link>
          <Link className="text-decoration-none text-dark" to="/?cat=food">
            <h6 className='p-2'>FOOD</h6>
          </Link>
          <Link className="text-decoration-none text-dark" to="/?cat=technology">
            <h6 className='p-2'>TECHNOLOGY</h6>
          </Link>
          <Link className="text-decoration-none text-dark" to="/?cat=cinema">
            <h6 className='p-2'>CINEMA</h6>
          </Link>
          <Link className="text-decoration-none text-dark" to="/?cat=design">
            <h6 className='p-2'>DESIGN</h6>
          </Link>
          <span className='p-2'>Pratik</span>
          <span className='p-2'>Logout</span>
          <span className='p-2'>
            <Link to="write" className='text-decoration-none text-dark'>Write</Link>
          </span>
         </div>
      </div>
    </div>
  )
}
