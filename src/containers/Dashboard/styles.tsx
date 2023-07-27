import styled from 'styled-components';
import { IThemeColors } from '../../context/ThemeColorsProvider';

export const StyledDashboard = styled.div<{ $theme: IThemeColors }>`
  &,* {
    border-color: ${({ $theme }) => $theme.secondary};
    color: ${({ $theme }) => $theme.secondary};
    background-color: ${({ $theme }) => $theme.primary};
  }
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 2rem;
`;

export const StyledIcon = styled.img`
  width: 1rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
