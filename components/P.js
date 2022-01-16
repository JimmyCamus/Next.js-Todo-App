import styled from "styled-components";

const P = styled.p`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-size: 20px;
  padding: 5px 5px;
`;

export default P;
