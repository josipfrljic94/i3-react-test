import React from 'react'

const LogoItem = ({img}) => {
    return (
        <div className="logo-item"> 
            <img src={img} alt={img}></img>
        </div>
    )
}

export default LogoItem
