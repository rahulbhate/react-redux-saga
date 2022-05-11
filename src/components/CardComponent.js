import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 15px;
  justify-content: center;
  margin: auto;
  margin-bottom: 20px;
  padding: auto;
  align-items: center;

  color: ${(props) => props.color};
`;

const Content = styled.div`
  align-self: center;
`;
const Card = ({ ...props }) => {
  return (
    <Container>
      <Content>
        <p>{props.user.name}</p>
        <p>{props.user.company.name}</p>
        <p>{props.user.company.catchPhrase}</p>
      </Content>
    </Container>
  );
};
export default Card;
