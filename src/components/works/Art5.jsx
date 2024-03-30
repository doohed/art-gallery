import styled from "styled-components";
import { data } from "../mockData.js";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow-x: scroll;
  filter: opacity(0);
  @media (max-width: 820px) {
    height: 100vh;
  }
`;

const Section = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 820px) {
    display: inline;
  }
`;

const Frame = styled.div`
  margin-top: 30px;
`;

const Footer = styled.div`
  text-align: left;
  margin-top: 40px;
`;

const Image = styled.img`
  height: 80vh;
  min-width: 700px;
  object-fit: cover;
  @media (max-width: 820px) {
    height: 50vh;
    min-width: 100vw;
  }
`;

const Left = styled.div`
  margin-left: 10vmin;
  @media (max-width: 820px) {
    margin: 0vmin;
  }
`;

const Right = styled.div`
  text-align: left;
  margin-top: 30px;
  margin-left: 30px;
  width: 40vw;
`;

const Next = styled.div`
  margin-top: 30px;
  text-align: left;
  @media (max-width: 820px) {
    filter: grayscale(0);
    width: 100vw;
    align-items: center;
  }
`;

const Nextimg = styled.img`
  object-fit: cover;
  height: 40vmin;
  margin-right: 30vmin;
  margin-left: 30vmin;
  cursor: pointer;
  filter: grayscale(1);
  @media (max-width: 820px) {
    filter: grayscale(0);
    margin: 0px;
    margin-left: 30vmin;
  }
`;

const Link = styled.a`
  rotate: 270deg;
  position: absolute;
  left: 20px;
  bottom: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  @media (max-width: 820px) {
    top: 8px;
    rotate: 0deg;
  }
`;

const Art5 = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [oldScroll, setOldScroll] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  const handleScroll = (event) => {
    setOldScroll(scrollAmount + oldScroll);
    setScrollAmount(event.deltaY);
    setClientWidth((document.getElementById("box").offsetWidth / 1.7) | 0);
    
    if (oldScroll < 0) {
      setOldScroll(0);
    }

    if (oldScroll > clientWidth) {
      setOldScroll(clientWidth);
    }


    switch (oldScroll) {
      case 0:
        break;
      case -clientWidth:
        break;
    }

    window.scrollTo({
      top: 0,
      left: oldScroll + scrollAmount,
      behavior: "smooth",
    });
  };
  function follow() {
    document.querySelector("#art").classList.remove("show");

    setTimeout(() => {
      window.location.assign("/6");
    }, "500");
  }

  function close() {
    document.querySelector("#art").classList.remove("show");

    setTimeout(() => {
      window.location.assign("/");
    }, "500");
  }
  return (
    <Container id="art" className="hide show ">
      <Section
        id="box"
        onWheel={handleScroll}
        className="ease-out duration-[1s]"
      >
        <Left>
          <Frame>
            <Image src={data[4].img} />
          </Frame>
          <Footer>
            <h1 className="">{data[4].title}</h1>
          </Footer>
        </Left>
        <Right>
          <h1>Credit</h1>
          <span>石田 スイ / Ishida Sui</span>
        </Right>
        <Next>
          <h2 className="mt-[20vmin] ml-[30vmin]">Next Project</h2>
          <Nextimg
            onClick={follow}
            className="m-[10px] hover:grayscale-0 ease-in-out duration-700"
            src={data[5].img}
          />
        </Next>
      </Section>
      <Link onClick={close} className="relative group">
        <h2 className="ease-in-out duration-300">CLOSE</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
    </Container>
  );
};

export default Art5;
