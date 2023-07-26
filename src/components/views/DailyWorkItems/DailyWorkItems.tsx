import { useEffect, useState } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import { StyledDailyWorkItems, StyledDailyWorkItemsContainer } from './styles';
import {
  onDailyWorkItems,
  addDailyWorkItem,
  updateWorkItemCompleted,
  deleteDailyWorkItem,
} from '../../../Firebase';
import InputField from '../../pieces/InputField/InputField';
import ItemList from '../../pieces/ItemList/ItemList';

export interface IDailyWorkitems {
  items: IWorkItem[];
}

const DailyWorkItems = (): JSX.Element => {
  const [items, setItems] = useState<IWorkItem[]>([]);

  onDailyWorkItems((newItems: IWorkItem[]) => {
    if (newItems && newItems.length !== items.length) {
      console.log('here :>> ');
      setItems(newItems);
    }
    else if (!newItems && items.length > 0) setItems([]);
  });

  const mapItems = () => {
    return items.map((item: IWorkItem) => {
      return {
        id: item.id,
        item: item.item,
        completed: item.completed ?? true,
      }
    })
  };

  const handleInput = (input: string) => {
    console.log('e :>> ', input);
    addDailyWorkItem(items.length, input);
  };
  return (
    <StyledDailyWorkItemsContainer>
      <h2>Daily Work Items</h2>
      {items && <ItemList items={mapItems()} updateItem={updateWorkItemCompleted} deleteItem={deleteDailyWorkItem}/>}
      <InputField callback={handleInput} />
    </StyledDailyWorkItemsContainer>
  );
};
export default DailyWorkItems;
