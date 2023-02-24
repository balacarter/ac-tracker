import { FC } from 'react';
import { IThemeColors, useThemeColorsContext } from '../../../context/ThemeColorsProvider';
import { StyledStreakBox } from './styles';

export interface IBlankDot {
  checked: boolean;
}

const BlankDot: FC<IBlankDot> = ({ checked }: IBlankDot): JSX.Element => {
  const themeColors = useThemeColorsContext() as IThemeColors;
  return <StyledStreakBox $themeColors={themeColors} $active={false} $checked={checked} $daily={false}></StyledStreakBox>;
};
export default BlankDot;
