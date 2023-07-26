import { ChangeEvent, Ref, useRef, useState } from 'react';
import { StyledInput, StyledInputContainer } from './styles';
import { StyledThemeIcon } from '../StyledThemeIcon';

interface IFieldInput {
  callback: (input: string) => void;
}

const FieldInput = ({ callback }: IFieldInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hideInput, setHideInput] = useState(true);

  const handleInput = () => {
    if (hideInput) {
      setHideInput(!hideInput);
    } else if (inputRef.current) {
      const input = inputRef.current.value;
      callback(input);
      inputRef.current.value = '';
      setHideInput(!hideInput);
    }
  }

  return (
    <StyledInputContainer>
      <StyledThemeIcon
          $icon={hideInput ? '+' : '✓'}
          className={hideInput ? 'show' : 'add'}
          onClick={handleInput}
        />
      {!hideInput && <StyledInput ref={inputRef} />}
    </StyledInputContainer>
  )
}

export default FieldInput;