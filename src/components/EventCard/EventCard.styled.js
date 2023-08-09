import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  border: 2px dashed ${setBorderColor};
  padding: ${(props) => props.theme.spacing(2)};
`;

export const EventTitle = styled.h2`
  margin: 0px 0px 20px 0px;
  text-align: center;
  font-size: 20px;
`;

export const Info = styled.p`
  margin-top: 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(props) => props.theme.spacing()};
    color: gray;
  }
`;

export const Chip = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: ${(props) => props.theme.spacing()};
  border-radius: ${(props) => props.theme.spacing()};
  text-transform: uppercase;
  color: #fff;

  background-color: ${setBgColor};

  /* background-image: ${(props) => `url(${props.img})`}; */
`;

function setBgColor({ type, theme: { colors } }) {
  switch (type) {
    case "keynote":
      return colors.green;
    case "discussion":
      return colors.blue;
    case "workshop":
      return colors.red;
    case "presentation":
      return colors.violet;
    default:
      return colors.black;
  }
}

function setBorderColor({ theme: { colors } }) {
  return colors.border;
}
