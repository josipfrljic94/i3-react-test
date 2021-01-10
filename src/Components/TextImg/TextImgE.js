import styled from 'styled-components';


export const Container= styled.div`
background:${({themedark})=>(themedark ? "#0d0d44": "#fafafa")};
@media screen and (max-width:768px){
    padding:100px 0;}
`

export const Wrapper= styled.div`
display:grid;
z-index:1;
width:100%;
margin-right:auto;
margin-left:auto;
padding:0 20px;
justify-content:center;
`
export const Row= styled.div`
width:100%;
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
justify-content:space-between;
grid-template-areas:${({imgStart})=>(imgStart ?  `"col2 col1"`: `"col1 col2"`)};

@media screen and (max-width:768px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `"col1" "col2"` : `"col2 col2" "col1 col1"`)};
}
`
export const Col1= styled.div`

width:100%;
margin-bottom:15px;
padding:0 50px;
grid-area:col1;
display:block;
margin:0 auto;


@media screen and (max-width:768px){
   padding:0 0;
}
`
export const Col2= styled.div`

max-width:100%;
margin-bottom:15px;
padding:0 50px;
grid-area:col2;
@media screen and (max-width:768px){
padding:0 0;
}
`

export const Block= styled.div`
    width:100%;
    display:grid;
    align-content:center;
    
`
export const Title= styled.h2`
    text-align:center;
    color:${({themedark})=>(themedark ? "#fafafa": "#0d0d44")};
    width:50%;
    display:block;
  text-align:center;
  margin:5% 0;
  @media screen and (max-width:928px){
    width:100%;

  }
`
export const Paragraph= styled.p`
    margin:5px 0;
    padding:0 10%;
    align-content:center;
    text-align:center;
   text-indent:50px;
   letter-spacing:0.3px;
   margin-bottom:10px;
   font-size:0.8rem;
   color:${({themedark})=>(themedark ? "#fafafa": "#0a0a0a")};
`
export const Image= styled.img`
    width:100%;
    height:100vh;
    padding:0;
    margin:0;

    @media screen and (max-width:928px){
        height:60vh;
   width:100%;
}
@media screen and (max-width:1028px){
        height:80vh;
   width:100%;
}
`
