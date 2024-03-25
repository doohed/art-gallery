import styled, { useTheme } from "styled-components";
import Track from "./Track";
import { useRef, useState } from "react";

const Container = styled.div`
  overflow: hidden;
  height: 90vh;
`;

const Title = styled.div`
  text-align: left;
  margin-left: 80px;
  margin-bottom: 15px;
  margin-top: 10vh;
  user-select: none;
`;

const Images = styled.div`
  top: 310px;
  left: 0px;
  height: 32.3vh;
  width: 100%;
  margin: 0rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Menu = styled.a`
  cursor: pointer;
  color: white;
  &:hover {
    color: gray;
  }
`;

const Hero = () => {

  const [cord,setCord] = useState(null);
  const [x,setX] = useState (null);
  const [percentage, setPercentage] = useState(null);


  const elementRef = useRef(null);
  const handleMouseMove = (e) => {
    setCord(e.clientX);
    setX(document.querySelector(".box").clientWidth);
    setPercentage((((cord / x) * 100 )*2) | 0);
    // console.log(elementRef.current.scrollLeft);
    console.log(percentage);
    // document.getElementById("container").scrollLeft = percentage;
    document.getElementById(
      "box"
    ).style.transform = `translate(-${percentage}vw,0%)`;
  };

  return (
    <Container onMouseMove={handleMouseMove} className="text-left">
      <Title>
        <h1>SUI ISHIDA</h1>
        <h1>石田 スイ</h1>
        <h1 className="ml-14">PORTAFOLIO</h1>
      </Title>
      <Images id="container" ref={elementRef}>
        <Track />
      </Images>
      <div className="flex">
        <h2 className="text-5xl mt-5 ml-20 select-none">漫画家</h2>
        <h4 className="absolute animate-pulse">SCROLL</h4>
      </div>
      <div className="select-none w-fit rotate-[270deg] mt-[90px] ml-[-20px]">
        <Menu className="ease-in-out duration-300">MENU</Menu>
      </div>
    </Container>
  );
};


export default Hero;
