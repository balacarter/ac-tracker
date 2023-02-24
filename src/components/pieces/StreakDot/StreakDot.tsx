import { FC, useState } from 'react';
import { IThemeColors, useThemeColorsContext } from '../../../context/ThemeColorsProvider';
import { StyledStreakBox } from './styles';

export interface IStreakDot {
  checked: boolean;
  callback: any;
  active?: boolean;
  id?: number;
  daily?: boolean;
}


const StreakDot: FC<IStreakDot> = ({checked, callback, id, active = false, daily = false}:IStreakDot):JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);
  const themeColors = useThemeColorsContext() as IThemeColors;

  const handleClick = (event: any) => {
    setIsChecked(!isChecked);
    callback(!isChecked, id);
    console.log('event :>> ', event);
  }

  return (
    <StyledStreakBox $themeColors={themeColors} onClick={(event) => {
      if(active) {
        handleClick(event)
      }
    }}
    $active={active}
    $checked={isChecked}
    $daily={daily}
    >
    </StyledStreakBox>
  )
}
export default StreakDot;