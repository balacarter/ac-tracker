import { FC } from 'react';
import StreakDot from '../StreakDot/StreakDot';
import { StyledChallengeContainer, StyledChallengeMessage } from './styles';

export interface IChallenge {
  challenge: string;
  completed: boolean;
}

const handleStreakDotClick = (checked: boolean) => {
  console.log('event :>> ', checked);
};

const Challenge: FC<IChallenge> = ({ challenge, completed }: IChallenge): JSX.Element => (
    <StyledChallengeContainer>
      <StreakDot callback={handleStreakDotClick} checked={completed}/>
      <StyledChallengeMessage>{challenge}</StyledChallengeMessage>
    </StyledChallengeContainer>
);
export default Challenge;
