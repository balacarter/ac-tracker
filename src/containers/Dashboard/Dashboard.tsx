import { FC } from 'react';
import contrast from 'get-contrast';
import randomColor from 'random-hex-color';
import { ThemeProvider } from 'styled-components';
import { StyledDashboard } from './styles';
import DailyStreak from '../../components/views/DailyStreak/DailyStreak';
import { IThemeColors } from '../../context/ThemeColorsProvider';
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

const Dashboard: FC<IDashboard> = (): JSX.Element => (
  <ThemeProvider theme={themeColors}>
    <StyledDashboard $theme={themeColors}>
      <DailyStreak themeColors={themeColors} />
      <DailyWorkItems></DailyWorkItems>
    </StyledDashboard>
  </ThemeProvider>
);
export default Dashboard;
