import styled from 'styled-components';
import { StyledContainer } from '../../pieces/styles';

export const StyledDailyWorkItemsContainer = styled(StyledContainer)`
  flex-direction: column;
`;

export const StyledItemsContainer = styled(StyledContainer)`
  .today {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
      margin: 0;
    }
  }
`;

export const StyledDailyWorkItems = styled.ul``;
