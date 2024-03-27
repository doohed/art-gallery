import styled from "styled-components";
import { data } from "../mockData";
import { useEffect, useState } from "react";

const Section = styled.div``;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  left: 0px;
  top: 0px;
  width: 100vw;
  backdrop-filter: blur(10px);
  filter: opacity(0);
  z-index: -1;
  user-select: none;
`;

const Top = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Mid = styled.div`
  width: 95vw;
`;

const Bot = styled.div``;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  height: 55vh;
  transform: translate(0%, 10vh);
`;

const Link = styled.a`
  rotate: 270deg;
  position: absolute;
  left: 0px;
  bottom: 80px;
  margin-bottom: 60px;
  cursor: pointer;
`;


const  Art = (count) => {
  
const [currentImg, setCurrentImg] = useState(data[count.value].img)

  
useEffect(() => {
  setCurrentImg(data[count.value].img)
}, [count.value]);


  function close() {
    document.querySelector("#art").classList.add("hide");
    document.querySelector("#art").classList.remove("show");
  }

  return (
    <Section className="">
      <Container onClick={close} id="art" className=" ease-in-out duration-300">
        <Top>
          
        </Top>
        <Mid>
          <Frame>
            <Image id="image" className=" ease-in-out duration-1000" src={currentImg} />
          </Frame>
        </Mid>
        <Bot></Bot>
        <Link onClick={close} className="relative group">
        <h2 className="ease-in-out duration-300">CLOSE</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
      </Container>
    </Section>
  );
}

export default Art;

