import { FC } from 'react';
import contrast from 'get-contrast';
import randomColor from 'random-hex-color';
import { StyledDashboard } from './styles';
import DailyStreak from '../../components/views/DailyStreak/DailyStreak';
import ThemeColorsProvider, { IThemeColors } from '../../context/ThemeColorsProvider';
import DailyWorkItems from '../../components/views/DailyWorkItems/DailyWorkItems';

export interface IDashboard {}

export const getColorPair = () => {
  const colorA = randomColor();
  let colorB = randomColor();

  while (!contrast.isAccessible(colorA, colorB)) {
    colorB = randomColor();
  }

  return {
    primary: colorA,
    secondary: colorB,
  };
};

const themeColors: IThemeColors = getColorPair();

const items = [
  {
    content: 'test1'
  },
  {
    content: 'test2'
  },
  {
    content: 'test3'
  }
]

const Dashboard: FC<IDashboard> = (): JSX.Element => {
  return (
    <ThemeColorsProvider value={themeColors}>
      <StyledDashboard $theme={themeColors}>
        <DailyStreak themeColors={themeColors} />
        <DailyWorkItems></DailyWorkItems>
      </StyledDashboard>
    </ThemeColorsProvider>
  );
};
export default Dashboard;
