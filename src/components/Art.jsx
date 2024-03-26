import styled from "styled-components";
import { data } from "../mockData";
import { useState } from "react";

const Section = styled.div``;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  left: 0px;
  top: 0px;
`;

const Top = styled.div`
  height: 100px;
  border: 1px black solid;
  display: flex;
  justify-content: space-between;
`;

const Mid = styled.div`
  width: 100vw;
`;

const Bot = styled.div``;

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

const Link = styled.a`
  margin-top: 40px;
  margin-left: 5vw;
`;
const Navbar = styled.div`
  width: 25vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 5vw;
`;


function Art() {
  const [currentId, setCurrentId] = useState(0);



  return (
    <Section className="">
      <Container className="hide show backdrop-blur-sm">
        <Top>
          <Link>
            <h2>CLOSE</h2>
          </Link>
          <Navbar>
            <div className="text-right">
              <h2 className="text-[30px]">{data[currentId].id}</h2>
            </div>
            <div className="w-full h-1 bg-gray-700 group:"></div>

            <div className="flex justify-between text-xl">
              <a href="" className="ease-in-out duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              <a href="" className="ease-in-out duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </Navbar>
        </Top>
        <Mid>
          <Frame>
            <Image src={data[currentId].img} />
          </Frame>
        </Mid>
        <Bot></Bot>
      </Container>
    </Section>
  );
}

export default Art;



