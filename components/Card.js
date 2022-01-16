import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => (props.completed ? "#6beb7c" : "#eee")};
  color: #000;
  margin-top: 15px;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default Card;
