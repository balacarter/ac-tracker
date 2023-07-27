import { FC, useState } from 'react';
import DailyStreakCount from '../../pieces/DailyStreakCount/DailyStreakCount';
import BlankDot from '../../pieces/StreakDot/BlankDot';
import StreakDot from '../../pieces/StreakDot/StreakDot';
import {
  StyledDailyStreak,
  StyledDailyStreakContainer,
  StyledStreakDotContainer,
  StyledTodaySpan,
} from './styles';
import {
  IDailyChallenge,
  dbSubscribe,
  dbUpdate,
} from '../../../Firebase';
import Challenges from '../Challenges/Challenges';

export interface IDailyStreak {
  themeColors: any;
}

const DailyStreak: FC<IDailyStreak> = (themeColors): JSX.Element => {
  const [streakCount, setStreakCount] = useState(0);
  const [challenges, setChallenges] = useState<IDailyChallenge[]>([]);

  dbSubscribe('daily/count', (data: any) => {
    const count = data;
    if (count !== streakCount) setStreakCount(count);
  });

  dbSubscribe('daily/challenges', (newChallenges: IDailyChallenge[]) => {
    if (newChallenges && newChallenges?.length !== challenges.length) {
      setChallenges(newChallenges);
    } else if (newChallenges === null && challenges.length > 0)
      setChallenges([]);
  });

  const handleStreakDotClick = (completed: boolean) => {
    dbUpdate('daily/completed', completed);
    if (completed) dbUpdate('daily/count', streakCount + 1);
    else dbUpdate('daily/count', streakCount - 1);
  };
  return (
    <StyledDailyStreakContainer>
      <StyledDailyStreak>
        <DailyStreakCount count={streakCount} />
        <StyledStreakDotContainer $checked={false}>
          <BlankDot checked={true}></BlankDot>
          <BlankDot checked={true}></BlankDot>
          <BlankDot checked={true}></BlankDot>
          <StreakDot
            callback={handleStreakDotClick}
            checked={false}
            active={true}
            daily={true}
          />
          <BlankDot checked={false}></BlankDot>
          <BlankDot checked={false}></BlankDot>
          <BlankDot checked={false}></BlankDot>
        </StyledStreakDotContainer>
        <StyledTodaySpan>today</StyledTodaySpan>
      </StyledDailyStreak>
      {challenges && <Challenges dailyChallenges={challenges} />}
    </StyledDailyStreakContainer>
  );
};
export default DailyStreak;
