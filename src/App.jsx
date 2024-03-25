import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Work1 from "./components/works/Work1";
import Work2 from "./components/works/Work2";
import Work3 from "./components/works/Work3";
import Work4 from "./components/works/Work4";
import Work5 from "./components/works/Work5";
import Work6 from "./components/works/Work6";
import Work7 from "./components/works/Work7";
import Work8 from "./components/works/Work8";
import Work9 from "./components/works/Work9";
import Work10 from "./components/works/Work10";
import Work11 from "./components/works/Wok11";

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
    {
      path: "work/4",
      element: <Work4 />,
    },
    {
      path: "work/5",
      element: <Work5 />,
    },
    {
      path: "work/6",
      element: <Work6 />,
    },
    {
      path: "work/7",
      element: <Work7 />,
    },
    {
      path: "work/8",
      element: <Work8 />,
    },
    {
      path: "work/9",
      element: <Work9 />,
    },
    {
      path: "work/10",
      element: <Work10 />,
    },
    {
      path: "work/11",
      element: <Work11 />,
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
