import { FC } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import { StyledDailyWorkItems } from './styles';

export interface IDailyWorkitems {
  items: IWorkItem[];
}

const DailyWorkItems: FC<IDailyWorkitems> = ({ items }: IDailyWorkitems): JSX.Element => {
  const itemEls = items.map((item) => {
    return <li>{item.content}</li>
  });
  console.log('itemEls :>> ', itemEls);
  return <StyledDailyWorkItems>{itemEls}</StyledDailyWorkItems>;
};
export default DailyWorkItems;
