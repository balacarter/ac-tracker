import styled, { css } from 'styled-components';

export const StyledThemeIcon = styled.div<{
  $icon: string;
  $right?: number;
  $left?: number;
}>`
  width: 1rem;
  height: 1rem;
  display: block;
  ::before {
    content: ${({$icon}) => `'${$icon}'`};;
  }
  right: ${({$right}) => $right};
  left: ${({$left}) => $left};
`;
