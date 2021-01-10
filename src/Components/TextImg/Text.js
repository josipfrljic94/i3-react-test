import React from 'react';
import {Block,Paragraph} from "./TextImgE";

const Text = ({p1,p2,themedark}) => {
    return (
       <Block>
          
           <Paragraph themedark={themedark}> 
               {p1}
           </Paragraph>
           <Paragraph themedark={themedark}>{p2}
           </Paragraph>
       </Block>
    )
}
export default Text
