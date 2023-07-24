import { FC, useEffect, useRef, useState } from 'react';
import StreakDot from '../../pieces/StreakDot/StreakDot';
import {
  addDailyChallenge,
  deleteDailyChallnge,
  IDailyChallenge,
  updateChallengeCompleted,
} from '../../../Firebase';
import {
  StyledAddChallengeContainer,
  StyledAddChallengeInput,
  StyledChallengeDotPair,
  StyledChallengesContainer,
  StyledChallengesList,
  StyledChallengePairContainer,
} from './styles';
import IconAdd from '../../../media/icons/plus.png';
import IconConfirm from '../../../media/icons/checked.png';
import IconDelete from '../../../media/icons/delete.png';
import {
  IThemeColors,
  useThemeColorsContext,
} from '../../../context/ThemeColorsProvider';
import { StyledIcon } from '../../../containers/Dashboard/styles';
import { StyledThemeIcon } from '../../pieces/StyledThemeIcon';

export interface IChallengesProps {
  dailyChallenges: IDailyChallenge[];
}

const Challenges: FC<IChallengesProps> = ({ dailyChallenges }): JSX.Element => {
  const [challenges, setChallenges] =
    useState<IDailyChallenge[]>(dailyChallenges);
  const [hideInput, setHideInput] = useState(true);
  const inputEl = useRef<HTMLInputElement>(null);
  const themeColors = useThemeColorsContext() as IThemeColors;

  useEffect(() => {
    setChallenges(dailyChallenges);
  }, [dailyChallenges]);

  const createChallenge = (event: any) => {
    if (hideInput) {
      setHideInput(!hideInput);
    } else if (inputEl.current) {
      const challenge = inputEl.current.value;
      addDailyChallenge(challenges.length, challenge);
      inputEl.current.value = '';
      setHideInput(!hideInput);
    }
  };

  const deleteChallenge = (index: number) => {
    deleteDailyChallnge(index);
  };

  const handleStreakDotClick = (completed: boolean, id: number) => {
    console.log('completed :>> ', completed);
    console.log('id :>> ', id);
    updateChallengeCompleted(completed, id);
  };

  const ChallengeList = () => {
    console.log('challenges :>> ', challenges);
    return (
      <StyledChallengesList>
        {challenges.map((challenge: IDailyChallenge) => (
          <StyledChallengePairContainer key={challenge.id}>
            <StyledChallengeDotPair key={challenge.id}>
              <StreakDot
                checked={challenge.completed}
                callback={handleStreakDotClick}
                active={true}
                id={challenge.id}
              />
              <li>{challenge.challenge}</li>
            </StyledChallengeDotPair>
            <StyledThemeIcon
              $icon={'x'}
              $right={0}
              onClick={() => deleteChallenge(challenge.id)}
            />
          </StyledChallengePairContainer>
        ))}
      </StyledChallengesList>
    );
  };

  return (
    <StyledChallengesContainer $themeColors={themeColors}>
      <ChallengeList />
      <StyledAddChallengeContainer>
        <StyledThemeIcon
          $icon={hideInput ? '+' : '✓'}
          className={hideInput ? 'show' : 'add'}
          onClick={createChallenge}
        />
        {!hideInput && <StyledAddChallengeInput ref={inputEl} />}
      </StyledAddChallengeContainer>
    </StyledChallengesContainer>
  );
};
export default Challenges;
