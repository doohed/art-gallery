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
  const child = { width: `100%vw`, height: `100%` };
  const parent = { width: `100vw`, height: `100%` };

  return (
    <Section>
      works
    </Section>
  );
};

export default Work;
