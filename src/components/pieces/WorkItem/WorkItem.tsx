import { FC } from 'react';
import { IThemeColors, useThemeColorsContext } from '../../../context/ThemeColorsProvider';
import { StyledWorkItem } from './styles';

export interface IWorkItem {
  content: string;
}

const WorkItem: FC<IWorkItem> = ({ content }: IWorkItem): JSX.Element => {
  const themeColors = useThemeColorsContext() as IThemeColors;
  return <StyledWorkItem>{content}</StyledWorkItem>;
};
export default WorkItem;
