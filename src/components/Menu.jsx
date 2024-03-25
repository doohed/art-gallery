import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  
  filter: opacity(0);
  z-index: -1;
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
  bottom: 5vh;
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
    document.querySelector("#hero").classList.add("show");
    document.querySelector("#hero").classList.remove("hide");
    
  }

  return (
    <Container id="menu" className="">
      <Title>
        <a onClick={closeMenu} className="ease-in-out duration-300">
          <h1>石田 スイ</h1>
          <h1 className="ml-14">GALLERY</h1>
        </a>
      </Title>
      <Section>
        <List>
          <a onClick={closeMenu} className="cursor-pointer ease-in-out duration-300">
            <h1>.INDEX</h1>
          </a>
          <a href="" className="ease-in-out duration-300">
            <h1>.ARTWORK</h1>
          </a>
          <a href="" className="ease-in-out duration-300">
            <h1>.INFO</h1>
          </a>
        </List>
      </Section>
      <Link onClick={closeMenu}>
        <h2 className="ease-in-out duration-300">CLOSE</h2>
      </Link>
    </Container>
  );
};

export default Menu;
