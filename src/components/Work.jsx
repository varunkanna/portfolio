import React, { useState } from "react";
import { styled } from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import Social from "./Social";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItems = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after{
    content: "${(props) => props.text}";
    position: absolute;
    top:0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &:after{
      // color:rebeccapurple
      animation: moveText .5s linear both;

      @keyframes moveText{
        to{
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

function Work() {
  const [work, setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItems text={item} key={item} onClick={() => setWork(item)} >{item}</ListItems>
            ))}
          </List>
        </Left>
        <Right>
          {
            work === "Web Design" ? <WebDesign /> : ( work === "Development" ? <Development /> : (work === "Social Media" ? <Social /> : <ProductDesign /> ) )
            // work === "Web Design" ? <WebDesign /> : ( work === "Development" ? <Development /> : (work === "Social Media" ? <Social /> : <ProductDesign /> ) )
          }
        </Right>
      </Container>
    </Section>
  );
}

export default Work;
