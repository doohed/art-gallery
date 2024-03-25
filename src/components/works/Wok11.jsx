/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { data } from "../../mockData";

const Section = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  height: 100vh;
  display: flex;
  background-color: #f0ead6;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  height: 95vh;
  width: 83.3vw;
  right: 0px;
  object-fit: cover;
`;

const Container = styled.div`
  overflow: hidden;
`;

const Left = styled.div`
  width: 16.7vw;
  height: 100vh;
  border: gray 0.1px solid;
`;

const Right = styled.div``;

const Title = styled.div``;
const Father = styled.div``;

const Footer = styled.div`
  position: absolute;
  border: gray 0.1px solid;
  border-left-width: 0px;
  width: 83.3vw;
  height: 45px;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
`;

const Square = styled.a`
  position: absolute;
  width: 16.7vw;
  height: 45px;
  bottom: 0px;
  left: 0px;
  border: gray 0.1px solid;
`;

const Work11 = () => {
  return (
    <Section>
      <Father>
        <Container>
          <Left>
            <Title className="rotate-[300grad]">
              <h1 className="mt-[300px] text-gray-500 w-[200px]">金木 研</h1>
            </Title>

            <Square
              className=" hover:bg-gray-900  ease-in-out duration-300"
              href="/"
            >
              <h1 className=" w-[100%] h-[100%] text-gray-500 text-[40px] hover:text-gray-100 ease-in-out duration-300">
                CLOSE
              </h1>
            </Square>
          </Left>
          <div className="overflow-hidden">
            <Image className="" src={data[10].img} draggable="false" />
          </div>
          <Right></Right>
          <Footer></Footer>
        </Container>
      </Father>
    </Section>
  );
};

export default Work11;
