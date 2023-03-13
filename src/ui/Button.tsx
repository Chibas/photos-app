import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  margin-top: ${props => props.theme.indent};
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  background: none;
  border-radius: 7px;
  border: 1px solid ${props => props.theme.borders};

  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme.accent};
  }
`;

const Button = ({ title, clickHandler } : { title: string, clickHandler: MouseEventHandler }) => {
  return (
    <StyledButton onClick={clickHandler}>{title}</StyledButton>
  )
};

export default Button;