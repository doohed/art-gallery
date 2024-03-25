import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


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
      </Container>
    </>
  );
}

export default App;
