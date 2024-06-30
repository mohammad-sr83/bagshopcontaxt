import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                    <div className='bag-box'>
                        <a href='#' className='bag'>
                            <FaBagShopping />
                            <span className='bag-prouduct-center'>0</span>
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}
