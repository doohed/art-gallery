import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { useState } from "react";

const Container = styled.div`
  overflow-x: hidden;
`;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
    {
      path: "work",
      element: <Work />,
    },
  ]);


  return (
    <>
      <Container>
        <RouterProvider router={router} />
        <Menu/>
      </Container>
    </>
  );
}

export default App;
