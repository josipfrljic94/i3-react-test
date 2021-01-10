import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import { RiArrowDownSLine} from "react-icons/ri";

const Dropdown = ({title,dlist}) => {
        const [dropdown, setdropDown] = useState(false);
        function dropdownfun(){
            setdropDown(!dropdown);
        }
    
    return (
        <div>
            <li className="dropdown" onClick={dropdownfun}>{title}
            <RiArrowDownSLine size={18}  className={dropdown ? "dropdown-arrow active" : "dropdown-arrow"}/>

                
                <ul className={dropdown ? "dropdown-ul active" : "dropdown-ul"}>
                    {dlist.map(dli=>{
                      return <DropdownItem title={dli.title} link={dli.link}/>
                    })}
                </ul>
               
              
            </li>
          
        </div>
    )
}

export default Dropdown
