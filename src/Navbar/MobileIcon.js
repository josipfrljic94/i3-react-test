import React from 'react'
import { RiArrowDownSLine} from "react-icons/ri";
const MobileIcon = ({title,navturn,navbar}) => {
    
    return (
       
             <div className="mobile-icon" onClick={navturn} >{title}
                <RiArrowDownSLine size={18} className={navbar ? "mobile-icon-arrow active " : "mobile-icon-arrow"}/>
            </div>
       
    )
}

export default MobileIcon
