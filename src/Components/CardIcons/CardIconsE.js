import styled from "styled-components";

export const IconsContainer= styled.div`

    width:100%;
    padding:5px;
`

export const IconsRow= styled.div`

    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(160px,1fr));
    @media screen and (max-width:928px){
        grid-template-columns: repeat(auto-fit, minmax(130px,1fr));
}
`
export const IconItem= styled.div`
    display:block;
margin:0;
padding:0;
    height:340px;
    min-width:160px;
    margin-bottom:1rem;
    @media screen and (max-width:928px){
        min-width:120px;
      height:315px;
}
`
export const Icon= styled.img`
    height:50%;
   /* transform: translateX(25%); */
  margin-left:auto;
  margin-right:auto;
  width:100%;
  
`
export const IconTitle= styled.h4`
text-align:center;
    font-weight:700;
`
export const IconText= styled.p`
    text-indent:10px;
   text-align:center;
   font-size:0.7rem;
  
`