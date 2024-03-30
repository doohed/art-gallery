import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

import Info from "./components/Info";
import Art1 from "./components/works/Art1";
import Art2 from "./components/works/Art2";
import Art3 from "./components/works/Art3";
import Art4 from "./components/works/Art4";
import Art5 from "./components/works/Art5";
import Art6 from "./components/works/Art6";
import Art7 from "./components/works/Art7";
import Art8 from "./components/works/Art8";
import Art9 from "./components/works/Art9";
import Art10 from "./components/works/Art10";
import Art11 from "./components/works/Art11";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="works" element={<Work />} />
          <Route path="info" element={<Info />} />
          <Route path="1" element={<Art1 />} />
          <Route path="2" element={<Art2 />} />
          <Route path="3" element={<Art3 />} />
          <Route path="4" element={<Art4 />} />
          <Route path="5" element={<Art5 />} />
          <Route path="6" element={<Art6 />} />
          <Route path="7" element={<Art7 />} />
          <Route path="8" element={<Art8 />} />
          <Route path="9" element={<Art9 />} />
          <Route path="10" element={<Art10 />} />
          <Route path="11" element={<Art11 />} />
        </Routes>
        <Menu />
      </Container>
    </>
  );
}

export default App;
