import { FC, useState } from 'react';
import { StyledStreakBox } from './styles';

export interface IStreakDot {
  checked: boolean;
  callback: any;
  active?: boolean;
}


const StreakDot: FC<IStreakDot> = ({checked, callback, active = false,}:IStreakDot):JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = (event: any) => {
    setIsChecked(!isChecked);
    callback(!isChecked);
    console.log('event :>> ', event);
  }

  return (
    <StyledStreakBox onClick={(event) => {
      if(active) {
        handleClick(event)
      }
    }}
    $active={active}
    $checked={isChecked}
    >
    </StyledStreakBox>
  )
}
export default StreakDot;