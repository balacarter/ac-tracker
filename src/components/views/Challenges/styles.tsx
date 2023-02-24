import styled from 'styled-components';
import { StyledIcon } from '../../../containers/Dashboard/styles';
import { IThemeColors } from '../../../context/ThemeColorsProvider';

export const StyledChallengesContainer = styled.div<{
  $themeColors: IThemeColors;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledChallengesList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  row-gap: 1rem;
`;

export const StyledChallengePairContainer = styled.div`
  display: flex;
  img {
    display: none;
  }
  &:hover img{
    display: block;
  }
`

export const StyledChallengeDotPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  padding: 0 0.5rem 0.5rem 0;
  border-bottom: 1px solid;
  width: 100%;
`;

export const StyledAddChallengeContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${StyledIcon} {
    margin-top: 0.5rem;
  }
`;


export const StyledAddChallengeInput = styled.input`
  &:focus-visible {
    outline: none;
  }
  background-color: unset;
  border: 0;
  border-bottom: 1px solid;
  padding-bottom: 0;
`;

