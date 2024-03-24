/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { data } from "../mockData";
import HorizontalScroll from "react-scroll-horizontal";
import { useState } from "react";

const Images = styled.div`
  display: flex;
  gap: 1vmin;
  top: 0px;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const Image = styled.img`
  width: 40vmin;
  height: 32.3vh;
  object-fit: cover;
  object-position: 100% center;
  filter: grayscale(1);
  cursor: pointer;
`;

const Track = () => {
  const child = { width: `40vmin`, height: `100%` };
  const parent = { width: `100vw`, height: `100%` };

  // const [isClicked, setIsClicked] = useState(false);

  // function Index() {
  //   if (isClicked === true) {
  //     document.querySelector("#index").classList.add("show");
  //     setIsClicked(false);
  //   } else {
  //     document.querySelector("#index").classList.remove("show");
  //     setIsClicked(true);
  //   }
  // }

  // function Works() {
  //   if (isClicked === true) {
  //     document.querySelector("#works").classList.remove("show");
  //     setIsClicked(false);
  //   } else {
  //     document.querySelector("#works").classList.add("show");
  //     setIsClicked(true);
  //   }
  // }

  return (
    <Images style={parent}>
      <HorizontalScroll reverseScroll={true} animValues={100}>
        {data.map((item) => (
          <a style={child} href={`work/${item.id}`}>
            <Image
              className="hover:grayscale-0 hover:scale-125 ease-in-out duration-700"
              src={item.img}
              draggable="false"
            />
          </a>
        ))}
      </HorizontalScroll>
    </Images>
  );
};

export default Track;
