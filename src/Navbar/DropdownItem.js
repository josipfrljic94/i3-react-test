import React from 'react'
import {Link} from "react-router-dom"




const DropdownItem = ({title,link}) => {
   
    return (
        <div style={{padding:"5px 0"}}>
            <Link className="dropdown-li" to={link}>{title} </Link>
        </div>
    )
}

export default DropdownItem
