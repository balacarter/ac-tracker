import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledInput = styled.input`
  &:focus-visible {
    outline: none;
  }
  background-color: unset;
  border: 0;
  border-bottom: 1px solid;
  padding-bottom: 0;
`;
