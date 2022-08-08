import { MapContainer } from 'react-leaflet';
import Loader from 'react-ts-loaders';
import styled from 'styled-components';

const MapWrapper = styled.main`
  .leaflet-control-container {
    .leaflet-bottom.leaflet-right {
      visibility: hidden;
    } 
  }
`;

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: calc(100vh - 250px);
`;

const LoaderWrapper = styled(Loader)`
  margin-top: 100px;
`;

export { StyledMapContainer, MapWrapper , LoaderWrapper };
