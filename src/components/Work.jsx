/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { useState } from "react";
import Art from "./Art";

const Section = styled.div`
  height: 100vh;
  align-items: center;
  user-select: none;
  filter: opacity(0);
  z-index: 0;
  overflow: hidden;
`;

const Left = styled.div`
  position: relative;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const Right = styled.div``;

const Title = styled.div`
  text-align: left;
  width: 100vw;
`;

const Container = styled.div`
  width: 80vw;

  margin-left: 10vw;
`;

const Project = styled.div`
  position: absolute;
  width: 50vw;
  right: 0px;
  top: 0px;
  background-color: white;
`;
const List = styled.div`
  position: absolute;
  margin-top: 50px;
  text-align: left;
`;

const ItemText = styled.h2`
  font-family: fot-klee-pro, serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-feature-settings: "palt", "calt", "liga";
`;

const ItemList = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Link = styled.a`
  rotate: 270deg;
  position: absolute;
  left: 0px;
  bottom: 140px;
  cursor: pointer;
`;

const Work = () => {
  setTimeout(() => {
    document.querySelector("#work").classList.remove("charge2");
    document.querySelector(".title").classList.remove("charge2");
  }, 300);

  const ItemClass = "ease-in-out duration-300 relative group";
  function open() {
    document.querySelector("#menu").classList.add("show");
  }

  const [value, setValue] = useState(0);

  function change(x) {
    setValue(x);
    document.querySelector("#art").classList.add("show");
  }

  return (
    <Section id="work" className="charge2 hide show ease-in-out duration-[.8s]">
      <Container>
        <Left>
          <Title className="title charge2 ease-in-out duration-1000">
            <h1 className="">ARTWORK</h1>
          </Title>
          <List>
            <ItemList className={ItemClass} onClick={() => change(0)}>
              <ItemText className="">
                東京グール 芸術 (げいじゅつ)
              </ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(1)}>
              <ItemText>:re cover</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(2)}>
              <ItemText>Ken Kaneki/Tokyo Ghoul</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(3)}>
              <ItemText>金木研 / 東京喰種</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(4)}>
              <ItemText>籠村シモン / 超人X</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(5)}>
              <ItemText>籠村シモン</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(6)}>
              <ItemText>超人X7巻カバー</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(7)}>
              <ItemText>tokio azuma / choujin X</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(8)}>
              <ItemText>choujin X vol.6</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(9)}>
              <ItemText>Tokio Kurohara / Choujin X</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
            <ItemList className={ItemClass} onClick={() => change(10)}>
              <ItemText>篠原と鈴屋什造</ItemText>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
            </ItemList>
          </List>
        </Left>
        <Right></Right>
      </Container>

      <Link onClick={open} className="relative group">
        <h2 className="ease-in-out duration-300">MENU</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
      <Art value={value} />
    </Section>
  );
};

export default Work;
