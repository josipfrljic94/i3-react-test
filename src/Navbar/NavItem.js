import React from 'react'
import {Link} from "react-router-dom"
const NavItem = ({title,link}) => {
    return (
        <div className="navbar-div">
           <Link to={link} className="navbar-li">{title}</Link>
        </div>
    )
}

export default NavItem
