import styled from "styled-components";
import { data } from "./mockData";
import { useEffect, useState } from "react";

const Section = styled.div``;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  left: 0px;
  top: 0px;
  width: 100vw;
  filter: opacity(0);
  z-index: -1;
  user-select: none;
  background-color: black;
  @media (prefers-color-scheme: light) {
    background-color: #f0ead6;
  }
`;

const Mid = styled.div`
  width: 95vw;
`;

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

const Art = (count) => {
  const [currentImg, setCurrentImg] = useState(data[count.value].img);

  useEffect(() => {
    setCurrentImg(data[count.value].img);
  }, [count.value]);

  function close() {
    document.querySelector("#art").classList.add("hide");
    document.querySelector("#art").classList.remove("show");
  }

  return (
    <Section className="">
      <Container onClick={close} id="art" className=" ease-in-out duration-300">
        <Mid>
          <Frame>
            <Image
              id="image"
              className=" ease-in-out duration-1000"
              src={currentImg}
            />
          </Frame>
        </Mid>
      </Container>
    </Section>
  );
};

export default Art;
