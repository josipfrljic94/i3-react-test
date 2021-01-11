import React, { useState,useRef,useEffect} from 'react'
import DropdownItem from './DropdownItem'
import { RiArrowDownSLine} from "react-icons/ri";
import {TweenMax,Power3} from "gsap"; 

const Dropdown = ({title,dlist}) => {
    
        let dropUl=useRef(null);
        const [dropdown, setdropDown] = useState(false);
        function dropdownfun(){
            setdropDown(!dropdown);
            dropdown ?
                TweenMax.to(dropUl,0.6,{opacity:0,width:0,height:0,top:-10,ease:Power3.easeOut}) 
            :
                TweenMax.to(dropUl,0.6,{opacity:1,width:200,height:150,top:50,zIndex:6,ease:Power3.easeOut}) 
            
        }
        useEffect(() => {
            TweenMax.to(dropUl,0.6,{opacity:0,width:0,height:0,top:-10,ease:Power3.easeOut}) 
            setdropDown(false);
        }, [])
               
    
    return (
        <div>
            <li className="dropdown" onClick={dropdownfun}>{title}
            <RiArrowDownSLine size={18}  className={dropdown ? "dropdown-arrow active" : "dropdown-arrow"}/>

                
                <ul ref={el=>dropUl=el} className={dropdown ? "dropdown-ul active" : "dropdown-ul"}>
                    {dlist.map(dli=>{
                        
                      return (<DropdownItem key={dli.title} title={dli.title} link={dli.link}/>)
                    })}
                </ul>
               
              
            </li>
          
        </div>
    )
}

export default Dropdown
