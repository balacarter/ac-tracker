import { FC } from 'react';
import { StyledStreakBox } from './styles';

export interface IBlankDot {
  checked: boolean;
}

const BlankDot: FC<IBlankDot> = ({ checked }: IBlankDot): JSX.Element => {
  return <StyledStreakBox $active={false} $checked={checked}></StyledStreakBox>;
};
export default BlankDot;
