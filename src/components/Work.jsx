/* eslint-disable react/jsx-key */

import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  filter: opacity(0);
`;

const Link = styled.a`
  rotate: 270deg;
  position: absolute;
  left: 30px;
  bottom: 48px;
  margin-bottom: 60px;
  cursor: pointer;
  @media (max-width: 1060px) {
    left: 0px;
  }
`;

const Section = styled.div`
  position: absolute;
  width: 95vw;

  right: 0px;
  top: 40px;
`;

const Text = styled.div`
  left: 20vw;
  top: 25vh;
  text-align: left;
  scrollbar-width: none;
  overflow-x: scroll;
`;

const Work = () => {
  setTimeout(() => {
    document.querySelector("#work").classList.remove("charge2");
    document.querySelector(".title").classList.remove("charge2");
  }, 300);

  function open() {
    document.querySelector("#menu").classList.add("show");
  }

  return (
    <Container
      id="work"
      className="charge2 hide show box ease-in-out duration-[.8s]"
    >
      <Section>
        <div className="text-left">
          <h1 className="title charge2 mt-[10vmin] ease-in-out duration-[1s]">
            WORKS
          </h1>
          <div className="w-full h-[1px] bg-gray-700" />
          <Text className="h-[80vh] text-lg">
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">Tokyo Ghoul</div>
              <div className="w-40">2011–2014</div>
              <div className="w-[60vmin]">
                <span>
                  Serialized in Weekly Young Jump by Shueisha Collected into 14
                  volumes
                </span>
              </div>
            </div>
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">Tokyo Ghoul [Jack]</div>
              <div className="w-40">2013</div>
              <div className="w-[60vmin]">
                <span>
                  Serialized in Weekly Young Jump by Shueisha Collected into 14
                  volumes
                </span>
              </div>
            </div>
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">Tokyo Ghoul: Joker</div>
              <div className="w-40">2014</div>
              <div className="w-[60vmin]">
                <span>
                  Serialized in Weekly Young Jump by Shueisha Collected into 1
                  volume
                </span>
              </div>
            </div>
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">Tokyo Ghoul:re</div>
              <div className="w-40">2014–2018</div>
              <div className="w-[60vmin]">
                <span>
                  Serialized in Weekly Young Jump by Shueisha Collected into 16
                  volumes
                </span>
              </div>
            </div>
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">This Gorilla Will Die in 1 Day</div>
              <div className="w-40">2021</div>
              <div className="w-[60vmin]">
                <span>February 6, 2021 to February 7, 2021</span>
              </div>
            </div>
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">Choujin X</div>
              <div className="w-40">2021–present</div>
              <div className="w-[60vmin]">
                <span>Serialized in Tonari no Young Jump by Shueisha</span>
              </div>
            </div>
          </Text>
        </div>
      </Section>
      <Link onClick={open} className="relative group">
        <h2 className="ease-in-out duration-300">MENU</h2>
        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-700 transition-all group-hover:w-full" />
      </Link>
    </Container>
  );
};

export default Work;
