import React, { useState } from "react";
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
  function closeMenu() {
    document.querySelector("#menu").classList.add("hide");
    document.querySelector("#menu").classList.remove("show");
  }

  function goToIndex() {
    if (window.location.href.indexOf("/")) {
      document.querySelector("#menu").classList.add("hide");
      document.querySelector("#menu").classList.remove("show");
    }

    if (window.location.href.indexOf("/artwork")) {
      document.querySelector("#work").classList.remove("show");
      document.querySelector("#work").classList.remove("hide");

      document.querySelector("#menu").classList.add("hide");
      document.querySelector("#menu").classList.remove("show");
      setTimeout(() => {
        window.location.assign("/");
      }, "500");
    }
  }

  function goToWorks() {
    if (window.location.href.indexOf("/artwork")) {
      document.querySelector("#menu").classList.add("hide");
      document.querySelector("#menu").classList.remove("show");
    }

    if (window.location.href.indexOf("/")) {
      document.querySelector("#hero").classList.remove("show");
      document.querySelector("#hero").classList.remove("hide");

      document.querySelector("#menu").classList.add("hide");
      document.querySelector("#menu").classList.remove("show");
      setTimeout(() => {
        window.location.assign("/artwork");
      }, "500");
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
            <h1>.ARTWORK</h1>
          </a>
          <a href="" className="cursor-pointer ease-in-out duration-300">
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
