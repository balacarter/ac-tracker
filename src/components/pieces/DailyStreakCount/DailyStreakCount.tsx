import { FC } from 'react';
import { StyledCount, StyledDailyStreak, StyledStreakMsg } from './styles';

export interface IDailyStreakCount {
  count: number;
}

const DailyStreakCount: FC<IDailyStreakCount> = ({count}:IDailyStreakCount):JSX.Element => {
  return (
    <StyledDailyStreak>
      <StyledCount>
        {count}
      </StyledCount>
      <StyledStreakMsg>
        day streak
      </StyledStreakMsg>
    </StyledDailyStreak>
  )
}
export default DailyStreakCount;