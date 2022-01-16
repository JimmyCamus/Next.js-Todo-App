import styled from "styled-components";

const Button = styled.button`
  background-color: #eb423d;
  color: #fff;
  padding: 5px 10px;
  border: solid 1px #000;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default Button;
