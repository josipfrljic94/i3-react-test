import React from 'react'
import {Container,settings,SliderElement,SliderImg,SliderEFooter} from "./SliderE";
import Slider from "react-slick";

const ImageSlider = ({data}) => {

    

    
 
    return (
        <div>
            <Container themedark={true}>
            <Slider {...settings} > 

           {data.map(s=>{
               return (
                <SliderElement key={s.id} >
                    <SliderImg rounded={s.rounded} src={s.img} alt={s.img}/>
               <SliderEFooter themedark={s.themedark}>{s.title}</SliderEFooter>
               </SliderElement>
                
                )
           })}
                
             </Slider> 
                
            </Container>
        </div>
    )
   
}

export default ImageSlider
