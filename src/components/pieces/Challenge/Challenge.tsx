import { FC } from 'react';
import StreakDot from '../StreakDot/StreakDot';
import { StyledChallengeContainer, StyledChallengeMessage } from './styles';

export interface IChallenge {
  challenge: string;
  completed: boolean;
}

const handleStreakDotClick = (event: any) => {
  console.log('event :>> ', event);
}

const BlankDot: FC<IChallenge> = ({ challenge, completed }: IChallenge): JSX.Element => {
  return (
    <StyledChallengeContainer>
      <StreakDot callback={handleStreakDotClick} checked={completed}/>
      <StyledChallengeMessage>{challenge}</StyledChallengeMessage>
    </StyledChallengeContainer>
  )
};
export default BlankDot;
