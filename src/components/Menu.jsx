import { useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #000000;

  filter: opacity(0);
  z-index: -1;
  @media (prefers-color-scheme: light) {
    background-color: #f0ead6;
  }
`;

const Title = styled.div`
  position: absolute;
  cursor: pointer;
  left: 5vw;
  top: 40px;
`;

const Link = styled.a`
  rotate: 270deg;
  position: absolute;
  left: 30px;
  bottom: 48px;
  margin-bottom: 60px;
  cursor: pointer;
`;

const Section = styled.div``;

const List = styled.div`
  position: absolute;
  left: 20vw;
  top: 25vh;
  text-align: left;
`;

const Menu = () => {
  const [data, setData] = useState(useLocation());
  const location = data.pathname;

  function closeMenu() {
    document.querySelector("#menu").classList.add("hide");
    document.querySelector("#menu").classList.remove("show");
  }

  function goToIndex() {
    switch (location) {
      case "/":
        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        break;
      case "/artwork":
        document.querySelector("#work").classList.remove("show");
        document.querySelector("#work").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        setTimeout(() => {
          window.location.assign("/");
        }, "500");
        break;
      case "/info":
        document.querySelector("#info").classList.remove("show");
        document.querySelector("#info").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        setTimeout(() => {
          window.location.assign("/");
        }, "500");
        break;
    }
  }

  function goToWorks() {
    switch (location) {
      case "/":
        document.querySelector("#hero").classList.remove("show");
        document.querySelector("#hero").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        setTimeout(() => {
          window.location.assign("/artwork");
        }, "500");
        break;
      case "/artwork":
        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        break;
      case "/info":
        document.querySelector("#info").classList.remove("show");
        document.querySelector("#info").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        setTimeout(() => {
          window.location.assign("/artwork");
        }, "500");
        break
      }
  }

  function goToInfo() {
    switch (location) {
      case "/":
        document.querySelector("#hero").classList.remove("show");
        document.querySelector("#hero").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        setTimeout(() => {
          window.location.assign("/info");
        }, "500");
        break;
      case "/artwork":
        document.querySelector("#work").classList.remove("show");
        document.querySelector("#work").classList.remove("hide");

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");

        setTimeout(() => {
          window.location.assign("/info");
        }, "500");
        break;
      case "/info":
       

        document.querySelector("#menu").classList.add("hide");
        document.querySelector("#menu").classList.remove("show");
        
        break;
      }
  }

  return (
    <Container id="menu" className="">
      <Title>
        <a onClick={goToIndex} className="ease-in-out duration-300">
          <h1>石田 スイ</h1>
          <h1 className="ml-14">GALLERY</h1>
        </a>
      </Title>
      <Section>
        <List>
          <a
            onClick={goToIndex}
            className="cursor-pointer ease-in-out duration-300"
          >
            <h1>.INDEX</h1>
          </a>
          <a
            onClick={goToWorks}
            className="cursor-pointer ease-in-out duration-300"
          >
            <h1>.WORK</h1>
          </a>
          <a onClick={goToInfo} className="cursor-pointer ease-in-out duration-300">
            <h1>.INFO</h1>
          </a>
        </List>
      </Section>
      <Link onClick={closeMenu} className="relative group">
        <h2 className="ease-in-out duration-300">CLOSE</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
    </Container>
  );
};

export default Menu;
