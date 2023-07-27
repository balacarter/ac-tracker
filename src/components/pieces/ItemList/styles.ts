import styled from 'styled-components';
import { StyledThemeIcon } from '../StyledThemeIcon';

export const StyledItemList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  row-gap: 1rem;
`;

export const StyledListItemPairContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 300px;
  ${StyledThemeIcon} {
    position: absolute;
    right: 0;
    display: none;
  }
  &:hover ${StyledThemeIcon} {
    display: block;
  }
`;

export const StyledListItemDotPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  padding: 0 0.5rem 0.5rem 0;
  border-bottom: 1px solid;
  width: 100%;

  li {
    margin-right: 1rem;
  }
`;
