import React from 'react'
import CardIcons from '../Components/CardIcons/CardIcons'
import Jumbotron from '../Components/Jumbotron'
import TextImg from '../Components/TextImg'
import { Title } from '../Components/TextImg/TextImgE'
import ImageSlider from '../Slider'

const About = ({icons,jumbotron2,ti2,services}) => {
   
    return (
        <div style={{paddingBottom:"10vh"}}>
            {jumbotron2.map(ju2=>{
                return(
                    <Jumbotron  data={ju2}/>
                )
            })}
                
            {ti2.map(t2=>{
                return(
                   <div>
                 <Title themedark={t2.darktheme}>{t2.title}</Title>
                    <TextImg icons={icons} textimg={t2}/>
                    <ImageSlider themedark={false} data={services}/>
                   </div>
                 
                )
            })}
           
              
              
                   
           
            
            
        </div>
    )
}

export default About
