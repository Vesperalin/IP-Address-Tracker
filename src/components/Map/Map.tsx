import Ipify from 'api/services/Ipify';
import { RootState } from 'context';
import { TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { MapData } from 'components/Map/components';
import { StyledMapContainer, MapWrapper } from './Map.styled';

const Map = () => {
  const { data } = Ipify.useAddress(useSelector((state: RootState) => state.input.address));

  return (
    <MapWrapper>
      <StyledMapContainer center={[51.111, 17.036]} zoom={12} zoomControl={false} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapData latitude={data?.location.lat} longitude={data?.location.lng} />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { Map };
