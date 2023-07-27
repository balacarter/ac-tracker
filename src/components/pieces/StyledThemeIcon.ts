import styled, { css } from 'styled-components';

export const StyledThemeIcon = styled.div<{
  $icon: string;
  $right?: number;
  $left?: number;
  $fontSize?: string;
  $height?: string;
}>`
  width: 1rem;
  height: 1rem;
  display: block;

  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: ${$fontSize};
    `}
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}

  :hover {
    cursor: pointer;
  }

  ::before {
    content: ${({ $icon }) => `'${$icon}'`};
  }
  right: ${({ $right }) => $right};
  left: ${({ $left }) => $left};
`;
