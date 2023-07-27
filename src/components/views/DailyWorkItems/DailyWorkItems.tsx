import { useState } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import { StyledDailyWorkItemsContainer, StyledItemsContainer } from './styles';
import {
  dbAdd, dbRemove, dbSubscribe, dbUpdate,
} from '../../../Firebase';
import InputField from '../../pieces/InputField/InputField';
import ItemList from '../../pieces/ItemList/ItemList';
import { StyledDivider } from '../../pieces/styles';

export interface IDailyWorkitems {
  items: IWorkItem[];
}

const DailyWorkItems = (): JSX.Element => {
  const [items, setItems] = useState<IWorkItem[]>([]);

  dbSubscribe('/daily/items', (newItems: IWorkItem[]) => {
    if (newItems && newItems.length !== items.length) {
      console.log('here :>> ');
      setItems(newItems);
    } else if (!newItems && items.length > 0) setItems([]);
  });

  const deleteDailyItem = (id: number) => {
    dbRemove(`daily/items/${id}`);
  };

  const updateDailyItem = (completed: boolean, id: number) => {
    dbUpdate(`daily/items/${id}/`, { ...items[id], completed });
  };

  const mapItems = () => items.map((item: IWorkItem) => ({
    id: item.id,
    item: item.item,
    completed: item.completed,
  }));

  const handleInput = (input: string) => {
    const id = items.length;
    const payload = {
      id,
      item: input,
      completed: true,
    };
    dbAdd(`daily/items/${id}`, payload);
  };
  return (
    <StyledDailyWorkItemsContainer>
      <h2>Daily Work Items</h2>
      <StyledItemsContainer>
        <div className="today">
          <h4>Today:</h4>
          {items && (
            <ItemList
              items={mapItems()}
              updateItem={updateDailyItem}
              deleteItem={deleteDailyItem}
            />
          )}
          <InputField callback={handleInput} />
        </div>
        <StyledDivider />
        <div></div>
      </StyledItemsContainer>
    </StyledDailyWorkItemsContainer>
  );
};
export default DailyWorkItems;
