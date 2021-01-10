import styled from 'styled-components'


export const Container = styled.div`
    width:100%;
    padding:0 25px;
    padding-top:10%;
    padding-bottom:5px;
    min-height:80vh;
    background:${({themedark})=>(themedark ? "#0d0d44":"#fafafa" )};
  
`
export const SliderElement= styled.div`
    height:500px;
    display:grid;
    align-content:space-around;
    width:auto;
    margin:0;
    padding: 15px;
    text-align:center;
    overflow:hidden;
    @media screen and (max-width:380px)  {
            height:440px;
    } 
`
export const SliderImg= styled.img`
    margin:auto;
   width:100%;
    height:75%;
    border-radius:${({rounded})=>(rounded ? "50%" : "0")};
   object-fit:cover;
object-position:center;
margin-bottom:10%;
    @media screen and (max-width:768px) and (min-width:600px) {
            height:65%;
    } 
  

`
export const SliderEFooter= styled.h2`

    width:100%;
    color:${({themedark})=>(themedark ? "#fafafa": "#0d0d44")};
    text-transform:capitalize;
    font-size:1.8rem;
    font-weight:800;
    font-family: 'Rubik', sans-serif;
`


// SETTINGS OF SLIDER 

// arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"darkgrey"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"darkgrey"  }}
      onClick={onClick}
    />
  );
}


export const settings = {
    dots: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3200,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite:true,
    lazyLoad: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
          arrows:true,
          nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:true,
          nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

        }
      }
    ]
  };