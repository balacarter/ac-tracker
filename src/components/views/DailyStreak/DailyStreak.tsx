import { FC } from 'react';
import DailyStreakCount from '../../pieces/DailyStreakCount/DailyStreakCount';
import BlankDot from '../../pieces/StreakDot/BlankDot';
import StreakDot from '../../pieces/StreakDot/StreakDot';
import { StyledDailyStreak, StyledStreakDotContainer, StyledTodaySpan } from './styles';
import { updateDaily } from '../../../Firebase';

export interface IDailyStreak {
  themeColors: any;
}

const handleStreakDotClick = (completed: boolean) => {
  updateDaily({completed});
}

const DailyStreak: FC<IDailyStreak> = (themeColors): JSX.Element => {
  return (
    <StyledDailyStreak>
      <DailyStreakCount count={10}/>
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