import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(239 239 239);
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 5px grey;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: grey;
    box-shadow: 1px 1px 2px grey;
  }
`;
