import styled from "styled-components";

export const Container= styled.div`

width:100%;
height:80vh;
position:relative;
padding:0;
margin:0;
overflow:hidden;
display:grid;
align-content:center;
justify-content:center;
background: url(${props=>props.bg});
`
export const Title1=styled.h1`

width:50%;
margin:0 auto;
font-size:3rem;
font-weight:700;
color:${({themedark})=>(themedark ? " #fafafa": "#0d0d44")};
`
export const Title2= styled.h3`
margin:0 auto;
font-size:2rem;
font-weight:400;
color:${({themedark})=>(themedark ? "#fafafa": "#0d0d44")};
`