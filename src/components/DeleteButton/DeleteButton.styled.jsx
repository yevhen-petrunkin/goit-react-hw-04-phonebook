import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
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
