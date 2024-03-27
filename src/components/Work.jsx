/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { useState } from "react";
import Art from "./Art";
import { data } from "../mockData";

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
      <Container className="cont">
        <Left>
          <Title className="title charge2 ease-in-out duration-1000">
            <h1 className="">ARTWORK</h1>
          </Title>
          <List>
            {data.map((item) => (
              <ItemList
                className={ItemClass}
                onClick={() => change(item.id - 1)}
              >
                <ItemText className="">{item.title}</ItemText>
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
              </ItemList>
            ))}
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
