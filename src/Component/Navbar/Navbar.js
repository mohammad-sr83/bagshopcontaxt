import React, { useContext } from 'react'
import { IoIosHelp } from "react-icons/io";
import Productcontext from '../../Context/ProductContects';
import './Navbar.css'
export default function Navbar() {
    const isclick= useContext(Productcontext)
    return (
        <div>
            <nav className="navbar navbar-expand-sm py-3 d-flex">
                <div className="container">
                    <a className="navbar-brand" id='navbra' href="#">
                        Navbar
                    </a>
                    <div className="navbar-nav me-auto ms-3 ">
                        <div className="nav-item">
                            <a className="nav-link"  href="#">Home</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href='#'>Disabled</a>
                        </div>
                    </div>
                    <div className='bag-box'>
                        <a href='#' className='bag'>
                            <IoIosHelp onClick={()=>isclick.setShowBag(true)}/>
                            <span className='bag-prouduct-center'>{isclick.productBag.length}</span>
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}
