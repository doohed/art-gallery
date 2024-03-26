import styled, { useTheme } from "styled-components";
import Track from "./Track";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  overflow: hidden;
  height: 90vh;
  filter: opacity(0);
`;

const Title = styled.div`
  text-align: left;
  margin-left: 80px;
  margin-bottom: 15px;
  margin-top: 15vh;
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

const Link = styled.a`
position: absolute;
  cursor: pointer;
  rotate: 270deg;
  left: 0px;
  bottom: 50px;

`;

const Hero = () => {
  const [cord, setCord] = useState(null);
  const [x, setX] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const elementRef = useRef(null);

  useEffect(() => {}, []);

  const handleMouseMove = (e) => {
    setCord(e.clientX - 33);
    setX(document.querySelector(".box").clientWidth);
    setPercentage(((cord / x) * 100) | 0);
    document.getElementById(
      "box"
    ).style.transform = `translate(-${percentage}vw,0%)`;
  };

  function open() {
    document.querySelector("#menu").classList.add("show");
    
  }

  return (
    <Container
    id="hero"
      onMouseMove={handleMouseMove}
      className=" hide show text-left box ease-in-out duration-300"
    >
      <Title>
        <h1>石田 スイ</h1>
        <h1 className="ml-14">GALLERY</h1>
      </Title>
      <Images id="container" ref={elementRef}>
        <Track />
      </Images>
      <div className="flex">
        <h2 className="text-5xl mt-5 ml-20 select-none">漫画家</h2>
      </div>

      <Link onClick={open} className="relative group ease-in-out duration-300">
        <h2>MENU</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full"/>
      </Link>
    </Container>
  );
};

export default Hero;
