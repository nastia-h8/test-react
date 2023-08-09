import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  background-color: ${(props) => (props.isHide ? "gold" : "teal")};
  &:hover {
    background-color: magenta;
  }

  h4 {
    color: green;
  }
`;

const Photo = styled.img`
  display: block;
  width: 300px;
`;

export { Container, Photo };
