import OwnIP from 'api/services/Weather';
import { RootState } from 'context';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Title } from 'components/Header/Header.styled';
import { Input } from 'components/Input';
import { changeAddress, handleChoice } from 'context/input-slice';

const Header = () => {
  const address = useSelector((state: RootState) => state.input.input);
  const dispatch = useDispatch();
  const { data, refetch } = OwnIP.useOnwIP();

  useEffect(() => {
    refetch();
    if(data !== undefined) {
      dispatch(changeAddress(data.ip));
    }
    dispatch(handleChoice());
  }, [data, dispatch, refetch]);

  const handleAddressChange = (input: string) => {
    dispatch(changeAddress(input));
  };

  const onButtonClick = () => {
    dispatch(handleChoice());
  };

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <Input value={address} changeValue={handleAddressChange} onButtonClick={onButtonClick}/>
    </Container>
  );
};

export { Header };
