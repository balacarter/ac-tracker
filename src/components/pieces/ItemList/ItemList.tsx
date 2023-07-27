import StreakDot from '../StreakDot/StreakDot';
import { StyledThemeIcon } from '../StyledThemeIcon';
import { StyledItemList, StyledListItemDotPair, StyledListItemPairContainer } from './styles';

interface IItem {
  id: number;
  item: string;
  completed: boolean;
}

interface IItemList {
  items: IItem[];
  updateItem: (completed: boolean, id: number) => void;
  deleteItem: (id: number) => void;
}

const ItemList = ({ items, updateItem, deleteItem }: IItemList) => {
  return (
    <StyledItemList>
      {items.map((item: IItem) => (
        <StyledListItemPairContainer key={item.id}>
          <StyledListItemDotPair key={item.id}>
            <StreakDot
              checked={item.completed}
              callback={updateItem}
              active={true}
              id={item.id}
            />
            <li>{item.item}</li>
          </StyledListItemDotPair>
          <StyledThemeIcon
            $icon={'x'}
            $right={0}
            onClick={() => deleteItem(item.id)}
          />
        </StyledListItemPairContainer>
      ))}
    </StyledItemList>
  );
};

export default ItemList;