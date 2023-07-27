import { FC } from 'react';
import { StyledWorkItem } from './styles';

export interface IWorkItem {
  id: number;
  item: string;
  completed: boolean;
}

const WorkItem: FC<IWorkItem> = ({ item }: IWorkItem): JSX.Element => {
  return <StyledWorkItem>{item}</StyledWorkItem>;
};
export default WorkItem;
