import React, { ChangeEvent } from 'react';

import arrowLogo from 'assets/images/icon-arrow.svg';
import { InputWrapper, InputField, Button } from './Input.styled';

interface Props {
  address: string;
  changeAddress: (input: string) => void;
}

interface MarginProps {
  margin?: string;
}

const Input = ({ address, changeAddress }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeAddress(event.target.value.trim());
  };

  return (
    <InputWrapper margin='20px 0'>
      <InputField type='text' placeholder='Search for any IP address or domain' value={address} onChange={onChange} />
      <Button><img src={arrowLogo} alt='arrow'/></Button>
    </InputWrapper>
  );
};

export { Input };
export type { MarginProps };
