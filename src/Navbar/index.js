import React,{useState} from 'react'
import logo from '../images/p&g.svg';
import Dropdown from './Dropdown';
import LogoItem from './LogoItem';
import MobileIcon from './MobileIcon';
import NavItem from './NavItem';


const Navbar = () => {
  const dlist=[{title:"Our mission",link:"/about"},{title:"Clean world",link:"/about"},{title:"Eco-future",link:"/about"}]

  const [navbar, setNavbar] = useState(false)
  
  const navturn=()=>{
      setNavbar(!navbar);
  }

    return (
        <div className="navbar">
            <MobileIcon title={"2020 Annual Report"} navturn={navturn} navbar={navbar}/> 
           <ul className={navbar ? "navbar-ul active" : "navbar-ul"}>
            <NavItem title={"2020 Annual Report"} link={"/about"}/>
            <NavItem title={"Financial highlights "} link={"/"}/>
            <LogoItem img={logo} link={"/"}/>
            <Dropdown title={"Letter to Shareowners"} dlist={dlist}/>
            <NavItem title={"2020 Annual Report"} link={"/about"}/>    
            </ul>  
      </div>
    )
}

export default Navbar
