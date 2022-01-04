import React from 'react'
import {Link} from 'react-router-dom'
import { NavbarElement } from './NavbarElement'


function Navbar() {
    return (
        <div className="nav">
                <div className="logoNav">
                    <img src="/cells.png" alt="logo" width="50px" height="50px"/>
                    <h2 style={{marginLeft:'20px', color:'#2E4765', marginTop:'10px'}}>Evax</h2>
                </div>
                <ul className="navbar-menu-items">
                    {NavbarElement.map((item, index)=>{
                        return(
                            <li key="index" className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
                
                
            
        </div>
    )
}

export default Navbar
