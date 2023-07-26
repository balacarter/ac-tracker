import { FC } from 'react';
import { IThemeColors, useThemeColorsContext } from '../../../context/ThemeColorsProvider';
import { StyledWorkItem } from './styles';

export interface IWorkItem {
  id: number;
  item: string;
}

const WorkItem: FC<IWorkItem> = ({ item }: IWorkItem): JSX.Element => {
  const themeColors = useThemeColorsContext() as IThemeColors;
  return <StyledWorkItem>{item}</StyledWorkItem>;
};
export default WorkItem;
