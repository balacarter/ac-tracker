import { FC, useState } from 'react';
import DailyStreakCount from '../../pieces/DailyStreakCount/DailyStreakCount';
import BlankDot from '../../pieces/StreakDot/BlankDot';
import StreakDot from '../../pieces/StreakDot/StreakDot';
import { StyledDailyStreak, StyledStreakDotContainer, StyledTodaySpan } from './styles';
import { getDailyStreakCount, onDailyStreakCount, updateDailyChallenge, updateDailyStreakCount } from '../../../Firebase';

export interface IDailyStreak {
  themeColors: any;
}

const DailyStreak: FC<IDailyStreak> = (themeColors): JSX.Element => {
  const [streakCount, setStreakCount] = useState(0);
  onDailyStreakCount((val: any) => {
    if (val !== streakCount) setStreakCount(val);
  })
  
  const handleStreakDotClick = (completed: boolean) => {
    updateDailyChallenge({completed});
    if (completed) updateDailyStreakCount(streakCount + 1)
    else updateDailyStreakCount(streakCount - 1);
  }
  return (
    <StyledDailyStreak>
      <DailyStreakCount count={streakCount}/>
      <StyledStreakDotContainer $checked={false}>
        <BlankDot checked={true}></BlankDot>
        <BlankDot checked={true}></BlankDot>
        <BlankDot checked={true}></BlankDot>
        <StreakDot callback={handleStreakDotClick} checked={false} active={true} />
        <BlankDot checked={false}></BlankDot>
        <BlankDot checked={false}></BlankDot>
        <BlankDot checked={false}></BlankDot>
      </StyledStreakDotContainer>
      <StyledTodaySpan>today</StyledTodaySpan>
    </StyledDailyStreak>
  );
}
export default DailyStreak;