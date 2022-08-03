import OwnIP from 'api/services/OwnIP';
import { RootState } from 'context';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title } from 'components/Header/Header.styled';
import { Input } from 'components/Input';
import { changeAddress } from 'context/input-slice';

const Header = () => {
  const address = useSelector((state: RootState) => state.input.address);
  const dispatch = useDispatch();
  const { data, refetch } = OwnIP.useOnwIP();

  useEffect(() => {
    refetch();
    if(data !== undefined) {
      dispatch(changeAddress(data.IPv4));
    }
  }, [data, dispatch, refetch]);

  const handleAddressChange = (input: string) => {
    dispatch(changeAddress(input));
  };

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <Input value={address} changeValue={handleAddressChange}/>
    </Container>
  );
};

export { Header };
