import React, { useState } from 'react';

import { Container, Title } from 'components/Header/Header.styled';
import { Input } from 'components/Input';

const Header = () => {
  const [address, setAddress] = useState<string>('');

  const handleAddressChange = (input: string) => {
    setAddress(input);
  };

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <Input address={address} changeAddress={handleAddressChange}/>
    </Container>
  );
};

export { Header };
