import styled from 'styled-components';

export const SearchLabel = styled.label`
  padding-bottom: 5px;
`;

export const SearchInput = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 20px;
  background-color: rgb(239 239 239);
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: inset 1px 1px 5px grey;
  outline: none;

  &:hover,
  &:focus {
    border-color: grey;
    outline: none;
  }

  &: focus {
    background-color: white;
  }
`;
