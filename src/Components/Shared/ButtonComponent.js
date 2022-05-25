
import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: #BC9A43;
  border: 0.05rem solid #BC9A43;
  border-color: ${(props) =>
    props.cart ? "blue" : "#BC9A43"};
  color: ${(props) => (props.cart ? "Black" : "white")};
  border-radius: ${(props) => (props.cart ? "0.5rem" : "0")};
  /* border-radius: 0.5rem; */
  padding: 1rem 0.5rem;
  width:100%;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.cart ? "green" : 'transparent'};
    color: #BC9A43;
  }
  &:focus {
    outline: none;
  }
`;