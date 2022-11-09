import styled, { css } from 'styled-components';
import { themeColors } from '../../../containers/Dashboard/Dashboard';

export const StyledStreakBox = styled.button<{
  $active: boolean;
  $checked: boolean;
}>`
  border-width: 2px;
  border-style: solid;
  border-radius: 25px;
  width: 1rem;
  height: 1rem;
  ${({ $checked }) =>
    $checked &&
    css`
      background-color: ${themeColors[1]};
    `}
  ${({ $active }) =>
    $active &&
    css`
      &:hover {
        cursor: pointer;
      }
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
