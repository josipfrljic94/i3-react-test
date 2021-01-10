import React from 'react'
import {IconsContainer,IconsRow,IconItem,Icon,IconTitle, IconText} from "./CardIconsE";
const CardIcons = ({icons}) => {
    return (
        <div>
            <IconsContainer>
              
                <IconsRow>
                {icons.map(icon=>{
                    return( <IconItem>
                        <Icon src={`../../img/${icon.img}`}></Icon>
                        <IconTitle>{icon.title}</IconTitle>
                        <IconText>{icon.text}</IconText>
                    </IconItem>)
                })}
                </IconsRow>
            </IconsContainer>
        </div>
    )
}

export default CardIcons
