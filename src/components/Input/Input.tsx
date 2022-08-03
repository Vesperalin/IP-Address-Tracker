import { ChangeEvent } from 'react';

import arrowLogo from 'assets/images/icon-arrow.svg';
import { InputWrapper, InputField, Button } from './Input.styled';

interface Props {
  value: string;
  changeValue: (input: string) => void;
}

const Input = ({ value, changeValue }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value.trim());
  };

  return (
    <InputWrapper margin='20px 0'>
      <InputField type='text' placeholder='Search for any IP address or domain' value={value} onChange={onChange} />
      <Button><img src={arrowLogo} alt='arrow'/></Button>
    </InputWrapper>
  );
};

export { Input };
