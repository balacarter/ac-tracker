import { useEffect, useState } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import { StyledDailyWorkItems, StyledDailyWorkItemsContainer } from './styles';
import {
  onDailyWorkItems,
  addDailyWorkItem,
} from '../../../Firebase';
import InputField from '../../pieces/InputField/InputField';

export interface IDailyWorkitems {
  items: IWorkItem[];
}

const DailyWorkItems = (): JSX.Element => {
  const [items, setItems] = useState<IWorkItem[]>();

  onDailyWorkItems((newItems: IWorkItem[]) => {
    if (!items  || newItems.length !== items.length)
      setItems(newItems);
  });

  const mapItems = () => {
    if (items)
      return items.map((item) => {
        return <li>{item.item}</li>;
      });
    else return <></>;
  };

  const handleInput = (input: string) => {
    console.log('e :>> ', input);
    if (items) addDailyWorkItem(items.length, input);
  };
  return (
    <StyledDailyWorkItemsContainer>
      <h2>Daily Work Items</h2>
      <StyledDailyWorkItems>{mapItems()}</StyledDailyWorkItems>
      <InputField callback={handleInput} />
    </StyledDailyWorkItemsContainer>
  );
};
export default DailyWorkItems;
