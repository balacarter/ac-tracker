import styled, { css } from 'styled-components';
import { IThemeColors } from '../../../context/ThemeColorsProvider';

export const StyledStreakBox = styled.button<{
  $active: boolean;
  $checked: boolean;
  $themeColors: IThemeColors;
  $daily: boolean
}>`
  border-width: 2px;
  border-style: solid;
  border-radius: 25px;
  width: 1rem;
  height: 1rem;
  ${({ $checked, $themeColors }) =>
    $checked &&
    css`
      background-color: ${$themeColors.secondary};
    `}
  ${({ $active }) =>
    $active &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
  ${({ $daily }) => 
    $daily &&
    css`
      margin: 0 0.35rem 0 0.35rem;
      width: 1.5rem;
      height: 1.5rem;
    `}

`;

export const StreakDotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
