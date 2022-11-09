import styled from 'styled-components';

export const StyledDashboard = styled.div<{ $theme: any }>`
  &,* {
    border-color: ${({$theme}) => $theme[1]};
    color: ${({$theme}) => $theme[1]};
    background-color: ${({$theme}) => $theme[0]};
  }
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;