import styled from "styled-components";
import { data } from "../mockData";

const Container = styled.div`

  position: absolute;
  top: 0px;
  left: 0px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  height: 55vh;
  transform: translate(0%, 10vh);
`;

const Page = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Showcase = () => {
  return (
    <Container>
      {data.map((item) => (
        <Page id={item.id} key={`image2 ` + item.id} draggable="false">
          <Frame>
            <Image id="album" className=" " src={item.img} draggable="false" />
          </Frame>
        </Page>
      ))}
    </Container>
  );
};

export default Showcase;
