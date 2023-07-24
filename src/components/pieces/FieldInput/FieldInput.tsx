import { ChangeEvent, Ref } from 'react';
import { StyledInput } from './styles';

interface IFieldInput {
  callback: (e: ChangeEvent) => void;
}

const FieldInput = ({ callback }: IFieldInput) => {
  return <StyledInput onChange={callback} />
}

export default FieldInput;