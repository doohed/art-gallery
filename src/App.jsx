import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Art from "./components/Art";
import Info from "./components/Info";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Hero />,
  //   },
  //   {
  //     path: "artwork",
  //     element: <Work />,
  //   },
  //   {
  //     path: "art",
  //     element: <Art/>,
  //   },
  //   {
  //     path: "info",
  //     element: <Info/>,
  //   },
  // ]);
  return (
    <>
      <Container>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="artwork" element={<Work/>}/>
          <Route path="art" element={<Art/>}/>
          <Route path="info" element={<Info/>}/>
        </Routes>
        <Menu />
      </Container>
    </>
  );
}

export default App;
