import styled from "styled-components";
import { data } from "../mockData.js";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

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
  min-width: 1400px;
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
  height: 45vmin;
  margin-right: 30vmin;
  margin-left: 30vmin;
  cursor: pointer;
  filter: grayscale(1);
  @media (max-width: 820px) {
    filter: grayscale(0);
    margin: 0px;
    margin-left: 35vmin;
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

const Art1 = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [oldScroll, setOldScroll] = useState(0);
  const [container, setContainer] = useState(null);

  const handleScroll = (event) => {
    setOldScroll(scrollAmount + oldScroll);
    setContainer((document.getElementById("box").offsetWidth / 2) | 0);
    console.log(container, oldScroll);
    setScrollAmount(event.deltaY);

    if (oldScroll < 0) {
      setOldScroll(0);
    }

    if (oldScroll > container) {
      setOldScroll(container);
    }

    window.scrollTo({
      top: 0,
      left: oldScroll + scrollAmount,
      behavior: "smooth",
    });
  };
  function follow() {
    setTimeout(() => {
      window.location.assign("/2");
    }, "500");
  }

  function close() {
    setTimeout(() => {
      window.location.assign("/");
    }, "500");
  }
  return (
    <Container id="art" className="hide show ">
      <Section id="box" onWheel={handleScroll} className="">
        <Left>
          <Frame>
            <Image src={data[0].img} />
          </Frame>
          <Footer>
            <h1 className="">{data[0].title}</h1>
          </Footer>
        </Left>
        <Right>
          <h1>Credit</h1>
          <span>石田 スイ / Ishida Sui</span>
        </Right>
        <Next>
          <h2 className="mt-[20vmin] ml-[30vmin] max-[820px]:ml-[35vmin]">
            Next Project
          </h2>
          <Nextimg
            onClick={follow}
            className="m-[10px] hover:grayscale-0 ease-in-out duration-100"
            src={data[1].img}
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

export default Art1;
