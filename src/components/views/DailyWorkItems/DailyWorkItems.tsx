import { useState } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import {
  StyledDailyPanel,
  StyledDailyWorkItemsContainer,
  StyledItemsContainer,
} from './styles';
import { dbAdd, dbRemove, dbSubscribe, dbUpdate } from '../../../Firebase';
import InputField from '../../pieces/InputField/InputField';
import ItemList from '../../pieces/ItemList/ItemList';
import { StyledDivider } from '../../pieces/styles';
import { StyledThemeIcon } from '../../pieces/StyledThemeIcon';

export interface IDailyWorkitems {
  items: IWorkItem[];
}

const DailyWorkItems = (): JSX.Element => {
  const [items, setItems] = useState<IWorkItem[]>([]);
  const [lastItems, setLastItems] = useState<IWorkItem[]>([]);

  dbSubscribe('/daily/items', (newItems: IWorkItem[]) => {
    if (newItems && newItems.length !== items.length) {
      setItems(newItems);
    } else if (!newItems && items.length > 0) setItems([]);
  });

  const deleteDailyItem = (id: number) => {
    dbRemove(`daily/items/${id}`);
  };

  const updateDailyItem = (completed: boolean, id: number) => {
    dbUpdate(`daily/items/${id}/`, { ...items[id], completed });
  };

  dbSubscribe('/last/items', (newItems: IWorkItem[]) => {
    if (newItems && newItems.length !== lastItems.length) {
      setLastItems(newItems);
    } else if (!newItems && lastItems.length > 0) setLastItems([]);
  });

  const mapItems = (items: IWorkItem[]) =>
    items.map((item: IWorkItem) => ({
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

  const moveWorkItems = () => {
    dbUpdate('last/items', { ...items });
    dbUpdate('daily/items', { ...[] });
  };

  return (
    <StyledDailyWorkItemsContainer>
      <h2>Daily Work Items</h2>
      <StyledItemsContainer>
        <StyledDailyPanel>
          <div className="col">
            <div className="row title">
              <h4>Today:</h4>
              <StyledThemeIcon $icon={'⇥'} $fontSize="1.5rem" onClick={moveWorkItems} />
            </div>
            {items && (
              <ItemList
                items={mapItems(items)}
                updateItem={updateDailyItem}
                deleteItem={deleteDailyItem}
              />
            )}
          </div>
          <InputField callback={handleInput} />
        </StyledDailyPanel>
        <StyledDivider />
        <StyledDailyPanel>
          <h4>Last:</h4>
          {items && <ItemList items={mapItems(lastItems)} />}
        </StyledDailyPanel>
      </StyledItemsContainer>
    </StyledDailyWorkItemsContainer>
  );
};
export default DailyWorkItems;
