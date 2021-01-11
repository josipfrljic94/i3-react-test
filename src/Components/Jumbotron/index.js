import React,{useRef,useEffect} from 'react'
import {Container,Title1,Title2} from "./JumbotronE";
import {TweenMax,Power3} from "gsap"; 

const Jumbotron = ({data}) => {

let title1=useRef(null);
let title2=useRef(null);
useEffect(() => {
    TweenMax.staggerFrom([title1,title2],1,{opacity:0,x:60,y:-65,ease:Power3.easeOut},.4)
}, [])


    return (
       
                <Container bg={data.img} >

                    <Title1  ref={el=>title1=el}>
                        {data.title}
                    </Title1>
                    <Title2 ref={el=>title2=el} >
                        {data.subtitle}
                    </Title2>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 250" className="wave" ><path fill={data.darktheme ? "#fafafa":"#0d0d44"}  fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,240C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"  ></path>
                </svg>
                </Container>
       
    )
}

export default Jumbotron
