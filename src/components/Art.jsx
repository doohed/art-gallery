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
  background-color: #000000dc;
  filter: opacity(0);
  z-index: -1;
`;

const Top = styled.div`
  height: 100px;
  border: 1px black solid;
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
  margin-top: 40px;
  margin-left: 5vw;
  height: 13px;
  cursor: pointer;
`;
const Navbar = styled.div`
  width: 24.5vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 8vw;
`;

const  Art = (count) => {
  
const [currentImg, setCurrentImg] = useState(data[count.value].img)

console.log(count.value)
  


  function close() {
    document.querySelector("#art").classList.add("hide");
    document.querySelector("#art").classList.remove("show");
    document.querySelector("#hero").classList.add("show");
  }

  return (
    <Section className="">
      <Container id="art" className=" backdrop-blur-sm ease-in-out duration-300">
        <Top>
          <Link onClick={close} className="relative group">
            <h2>CLOSE</h2>
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
          </Link>
        </Top>
        <Mid>
          <Frame>
            <Image id="image" className=" ease-in-out duration-1000" src={currentImg} />
          </Frame>
        </Mid>
        <Bot></Bot>
      </Container>
    </Section>
  );
}

export default Art;

function onChange() {


}