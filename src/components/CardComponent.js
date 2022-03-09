import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 15px;
  justify-content: space-around;
  color: ${(props) => props.color};
`;

const Content = styled.div`
  align-self: center;
`;
const Card = ({ ...props }) => {
  console.log(props);
  return (
    <Container>
      <Content>
        <h1>{props.user.name}</h1>
        <h2>{props.user.company.name}</h2>
        <p>{props.user.company.catchPhrase}</p>
      </Content>
    </Container>
  );
};
export default Card;
