import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Work1 from "./components/works/work1";
import Work2 from "./components/works/work2";
import Work3 from "./components/works/work3";

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
    {
      path: "work/1",
      element: <Work1 />,
    },
    {
      path: "work/2",
      element: <Work2 />,
    },
    {
      path: "work/3",
      element: <Work3 />,
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
