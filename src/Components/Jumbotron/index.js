import React from 'react'
import {Container,Title1,Title2} from "./JumbotronE";
const Jumbotron = ({data}) => {
    return (
       
                <Container bg={data.img}>
                    <Title1 >
                        {data.title}
                    </Title1>
                    <Title2 >
                        {data.subtitle}
                    </Title2>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 250" className="wave" ><path fill={data.darktheme ? "#fafafa":"#0d0d44"}  fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,240C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"  ></path>
                </svg>
                </Container>
       
    )
}

export default Jumbotron
