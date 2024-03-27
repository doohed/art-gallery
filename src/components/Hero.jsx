import styled from "styled-components";
import Track from "./Track";
import {  useRef, useState } from "react";

const Container = styled.div`
  overflow: hidden;
  height: 90vh;
  filter: opacity(0);
  user-select: none;
`;

const Title = styled.div`
  text-align: left;
  margin-left: 80px;
  margin-bottom: 15px;
  margin-top: 15vh;
  filter: opacity(0);
  animation: loadTitle 2s forwards;
`;

const Images = styled.div`
  top: 310px;
  left: 0px;
  height: 32.3vh;
  width: 100%;
  margin: 0rem;
  
  overflow: hidden;
`;

const Link = styled.a`
  position: absolute;
  cursor: pointer;
  rotate: 270deg;
  left: 0px;
  bottom: 46px;
`;

const Footer = styled.div`
  filter: opacity(0);
  animation: loadTitle 3s forwards;
`;

const Hero = () => {
  setTimeout(() => {
    document.querySelector("#hero").classList.remove("charge");
  }, 300);
  const [cord, setCord] = useState(null);
  const [x, setX] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const elementRef = useRef(null);

  

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
      className="charge hide show text-left box ease-in-out duration-1000"
    >
      <Title className="lateshow ease-in-out duration-1000">
        <h1>石田 スイ</h1>
        <h1 className="ml-14">GALLERY</h1>
      </Title>

      <Images id="container" ref={elementRef}>
        <Track />
      </Images>
      <Footer className="flex">
        <h2 className="text-5xl mt-5 ml-20 select-none">漫画家</h2>
      </Footer>
      <Link onClick={open} className="relative group ease-in-out duration-300">
        <h2>MENU</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
    </Container>
  );
};

export default Hero;
