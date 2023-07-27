import styled from 'styled-components';

export const StyledThemeIcon = styled.div<{
  $icon: string;
  $right?: number;
  $left?: number;
}>`
  width: 1rem;
  height: 1rem;
  display: block;

  :hover {
    cursor: pointer;
  }

  ::before {
    content: ${({ $icon }) => `'${$icon}'`};
  }
  right: ${({ $right }) => $right};
  left: ${({ $left }) => $left};

  &.show {
    font-size: 1.5rem;
    height: auto;
  }
`;
