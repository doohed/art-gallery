import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Art from "./components/Art";
import Info from "./components/Info";
import Showcase from "./components/Showcase";

const Container = styled.div`
  overflow-x: hidden;
`;

let value = 0;

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="artwork" element={<Work />} />
          <Route path="popup" element={<Showcase />} />
          <Route path="info" element={<Info />} />
          <Route path="show" element={<Showcase />} />
        </Routes>
        <Menu />
        <Art value={value} />
      </Container>
    </>
  );
}

export default App;

export function change(x) {
  console.log(x);
  value = x;
  document.querySelector("#art").classList.add("show");
  document.querySelector("#hero").classList.remove("show");
}
