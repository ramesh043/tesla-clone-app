import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
function Section({
  title,
  description,
  leftbtnText,
  rightbtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade direction="up">
            <Leftbutton>{leftbtnText}</Leftbutton>
            {rightbtnText && <Rightbutton>{rightbtnText}</Rightbutton>}
          </Fade>
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  /* font-size: 20px; */
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Leftbutton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 100px;
  color: white;
  font-size: 10px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;

const Rightbutton = styled(Leftbutton)`
  background: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 20px;
  margin-left: 47%;
  animation: animationDown infinite 1s;
`;
const Buttons = styled.div``;
