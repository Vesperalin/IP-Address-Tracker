import Ipify from 'api/services/Ipify';
import { RootState } from 'context';
import L from 'leaflet';
import { TileLayer, Marker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import locationIcon from 'assets/images/icon-location.svg';
import { MapData } from 'components/Map/components/MapData';
import { StyledMapContainer, MapWrapper, LoaderWrapper, DataContainer, Title, Value, DataCell } from './Map.styled';

const Map = () => {
  const { data, isLoading } = Ipify.useAddress(useSelector((state: RootState) => state.input.address));
  const locationMarker = new L.Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    popupAnchor: [-0, -0],
    iconSize: [38,45],     
  });

  if(isLoading) {
    return <LoaderWrapper type="ring" color="#8270e6" size={250} />;
  } else if(data) {
    return (
      <MapWrapper>
        <DataContainer>
          <DataCell>
            <Title>ip address</Title>
            <Value>{data.ip}</Value>
          </DataCell>
          <DataCell>
            <Title>location</Title>
            <Value>{data.location.city}{data && ', ' + data.location.region}</Value>
          </DataCell>
          <DataCell>
            <Title>timezone</Title>
            <Value>{data.location.timezone}</Value>
          </DataCell>
          <DataCell>
            <Title>isp</Title>
            <Value>{data.isp}</Value>
          </DataCell>
        </DataContainer>
        <StyledMapContainer center={[51.111, 17.036]} zoom={12} zoomControl={false} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[data.location.lat, data.location.lng]} icon={locationMarker} />
          <MapData latitude={data?.location.lat} longitude={data?.location.lng} />
        </StyledMapContainer>
      </MapWrapper>
    );
  } else return <></>;
};

export { Map };
