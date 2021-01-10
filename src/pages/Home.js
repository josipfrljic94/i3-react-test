import React from 'react'
import Jumbotron from '../Components/Jumbotron'
import ImageSlider from '../Slider'

const Home = ({data,jumbotron1}) => {


    return (
        <div>
            {jumbotron1.map(ju1=>{
                return(
                    <Jumbotron  data={ju1}/>
                )
            })}
            <ImageSlider data={data}/>
        </div>
    )
}

export default Home
