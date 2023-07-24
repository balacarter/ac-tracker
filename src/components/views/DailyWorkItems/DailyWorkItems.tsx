import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { IWorkItem } from '../../pieces/WorkItem/WorkItem';
import { StyledDailyWorkItems } from './styles';
import FieldInput from '../../pieces/FieldInput/FieldInput';

export interface IDailyWorkitems {
  items: IWorkItem[];
}


const DailyWorkItems: FC<IDailyWorkitems> = ({ items }: IDailyWorkitems): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>();
  const [listItems, setListItems] = useState<JSX.Element[]>([]);


  const handleChange = (e: ChangeEvent) => {
    console.log('e :>> ', e);
  }


  useEffect(() => {
    const itemEls = items.map((item) => {
      return <li>{item.content}</li>
    });
    setListItems(itemEls);
  }, [])
  return (
    <>
      <StyledDailyWorkItems>{listItems}</StyledDailyWorkItems>
      <FieldInput callback={handleChange} />
    </>
  )
};
export default DailyWorkItems;
