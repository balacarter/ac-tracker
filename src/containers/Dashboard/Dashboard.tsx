import { FC } from 'react';
import contrast from 'get-contrast';
import randomColor from 'random-hex-color';
import { StyledDashboard } from './styles';
import DailyStreak from '../../components/views/DailyStreak/DailyStreak';

export interface IDashboard {
}
export const getColorPair = () => {
  const colorA = randomColor()
  let colorB = randomColor()

  while (!contrast.isAccessible(colorA, colorB)) {
    colorB = randomColor()
  }

  return [colorA, colorB]
}

export const themeColors = getColorPair();

const Dashboard: FC<IDashboard> = (): JSX.Element => {
  return (
    <StyledDashboard $theme={themeColors}>
      <DailyStreak themeColors={themeColors}/>
    </StyledDashboard>
  );
}
export default Dashboard;