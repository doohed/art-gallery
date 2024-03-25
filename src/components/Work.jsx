/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { data } from "../mockData";

const Section = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  height: 100vh;
  display: flex;
`;

const Image = styled.img`
  margin-top: 10vh;
  height: 80vh;

  object-fit: cover;
  object-position: 100% center;
`;

const Container = styled.div`
  height: 100vh;
  width: 150vw;
  display: flex;
  transform: translate(-32%, 0%);
`;

const Left = styled.div`
  text-align: left;
  height: 100vh;
  width: 50vw;
`;

const Right = styled.div`
  height: 100vh;
`;

const Title = styled.div`
  margin-top: 20vh;
`;
const Father = styled.div``;

const Work = () => {


  return (
    <Section>
      <Title>

      </Title>
      <Left>

      </Left>
      <Right>
        
      </Right>
    </Section>
  );
};

export default Work;
