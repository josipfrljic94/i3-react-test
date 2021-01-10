import React from 'react'
import CardIcons from '../CardIcons/CardIcons';
import Text from './Text';
import {Container,Wrapper,Row,Col1,Col2,Image} from "./TextImgE";
const TextImg = ({icons,textimg}) => {
    return (
        <Container themedark={textimg.darktheme}>
            <Wrapper>
                    <Row>
                        <Col1>
                                <Text themedark={textimg.themedark} p1={textimg.paragraph1} p2={textimg.paragraph2}/>
                                <CardIcons icons={icons}/>
                        </Col1>
                        <Col2>
                           <Image src={textimg.img} alt={textimg.title}></Image>
                        </Col2>
                    </Row>
            </Wrapper>
        </Container>
    )
}

export default TextImg
