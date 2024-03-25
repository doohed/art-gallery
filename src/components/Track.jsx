/* eslint-disable react/jsx-key */

import styled from "styled-components";
import { data } from "../mockData";
import { useRef } from "react";

const Images = styled.div`
  display: flex;
  margin-left: 2vw;
  gap: 1vmin;
  top: 0px;
  width: 190vw;
  height: 100%;
  overflow: hidden;
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
  

  return (
    <Images className=" ease-out duration-[1s]" id="box" >
      {data.map((item) => (
        <a href={`work/${item.id}`} draggable="false">
          <Image
            className="hover:grayscale-0 hover:scale-125 ease-in-out duration-500"
            src={item.img}
            draggable="false"
          />
        </a>
      ))}
    </Images>
  );
};

export default Track;
