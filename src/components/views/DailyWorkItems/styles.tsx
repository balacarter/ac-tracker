import styled from 'styled-components';
import { StyledContainer } from '../../pieces/styles';
import { StyledThemeIcon } from '../../pieces/StyledThemeIcon';

export const StyledDailyWorkItemsContainer = styled(StyledContainer)`
  flex-direction: column;
`;

export const StyledDailyPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;

  h4 {
    margin: 0;
  }
`;

export const StyledItemsContainer = styled(StyledContainer)`
  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    h4 {
      margin: 0;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledDailyWorkItems = styled.ul``;
