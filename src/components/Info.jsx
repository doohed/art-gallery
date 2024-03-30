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

const Info = () => {
  setTimeout(() => {
    document.querySelector("#info").classList.remove("charge2");
    document.querySelector(".title").classList.remove("charge2");
  }, 200);

  function open() {
    document.querySelector("#menu").classList.add("show");
  }

  return (
    <Container
      id="info"
      className="charge2 hide show box ease-in-out duration-[.8s]"
    >
      <Section>
        <div className="text-left">
          <h1 className="title charge2 mt-[10vmin] ease-in-out duration-[1s]">
            INFO
          </h1>
          <div className="w-full h-[1px] bg-gray-700" />
          <Text className="h-[80vh] text-lg">
            <div className="ml-10 mt-[10vmin] mb-10 mr-9 flex">
              <div className="w-40">About</div>
              <div className="w-[60vmin]">
                <span>
                  石田 スイ（いしだ スイ、1986年12月28日 -
                  )は、日本の男性漫画家。福岡県久留米高専出身。血液型はA型。
                </span>
                <br />
                <br />
                <span>
                  デビュー前は「そとなみ」名義で新都社でWeb漫画を連載していた。
                </span>
              </div>
            </div>
            <div className="ml-10  mb-10 mr-9 flex">
              <div className="w-40">Contact</div>
              <div className="w-[60vmin]">
                <a
                  href="https://twitter.com/sotonami"
                  className="ease-in-out duration-300"
                >
                  twitter
                </a>
                <br />
                <a
                  href="https://www.instagram.com/ishida_____sui/"
                  className="ease-in-out duration-300"
                >
                  Instagram
                </a>
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

export default Info;
