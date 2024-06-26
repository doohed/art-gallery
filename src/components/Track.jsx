import styled from "styled-components";
import { data } from "./mockData";

const Images = styled.div`
  display: flex;
  margin-left: 2vw;
  gap: 1vmin;
  top: 0px;
  width: 190vw;
  height: 100%;
  overflow: hidden;
  user-select: none;
  @media (max-width: 820px) {
    margin-left: 0vw;
    width: 400vw;
  }
`;

const Image = styled.img`
  width: 40vmin;
  height: 32.3vh;
  object-fit: cover;
  object-position: 100% center;
  filter: grayscale(1);
  cursor: pointer;
  @media (max-width: 820px) {
    filter: grayscale(0);
    width: 40vw;
    height: 40vh;
  }
`;

const Track = () => {
  setTimeout(() => {
    document.querySelector("#album").classList.remove("charge");
  }, 300);

  function gallery(count) {
    document.querySelector(".home").classList.remove("show");
    setTimeout(() => {
      window.location.assign(`/${count}`);
    }, "300");
    document.querySelector(".home").classList.add("show");
  }

  return (
    <Images className=" ease-out duration-[1s]" id="box">
      {data.map((item) => (
        <a key={`image ` + item.id} draggable="false">
          <Image
            id="album"
            onClick={() => gallery(item.id)}
            className=" hover:grayscale-0 hover:scale-125 ease-in-out duration-500"
            src={item.img}
            draggable="false"
          />
        </a>
      ))}
    </Images>
  );
};

export default Track;
