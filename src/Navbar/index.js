import React,{useState,useRef,useEffect} from 'react'
import logo from '../images/p&g.svg';
import Dropdown from './Dropdown';
import LogoItem from './LogoItem';
import MobileIcon from './MobileIcon';
import NavItem from './NavItem';
import {TweenMax,Power3} from "gsap"; 

const Navbar = () => {
  const dlist=[{title:"Our mission",link:"/about"},{title:"Clean world",link:"/about"},{title:"Eco-future",link:"/about"}]

  const [navbar, setNavbar] = useState(false)
  let navbarUl=useRef(null);

  const navturn=()=>{
    setNavbar(!navbar);
    if( window.innerWidth < 768 ){
     
      
      navbar ?
      TweenMax.to(navbarUl,0.6,{opacity:0,ease:Power3.easeOut}) 
  :
      TweenMax.to(navbarUl,0.6,{opacity:1,ease:Power3.easeOut})
    }else{
      setNavbar(false)
    }
  
}
  useEffect(() => {
   
    window.addEventListener("resize",navturn);
  if( window.innerWidth < 768 ){
    navturn()
  }else{
    TweenMax.to(navbarUl,0.6,{opacity:1,ease:Power3.easeOut})
  }
   setNavbar(false)

   
  }, [window.innerWidth])
   
  
    return (
        <div className="navbar">
            <MobileIcon title={"2020 Annual Report"} navturn={navturn} navbar={navbar} onScroll={()=>setNavbar(false)}/> 
           <ul ref={el=>navbarUl=el} className={navbar ? "navbar-ul active" : "navbar-ul"}>
            <NavItem title={"2020 Annual Report"} link={"/about"}/>
            <NavItem title={"Financial highlights "} link={"/"}/>
            <LogoItem img={logo} link={"/"}/>
            <Dropdown title={"Letter to Shareowners"} dlist={dlist}/>
            <NavItem title={"Download"} link={"/about"}/>    
            </ul>  
      </div>
    )
}

export default Navbar
