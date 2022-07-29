import React from 'react';
import { TileLayer } from 'react-leaflet';

import { StyledMapContainer, MapWrapper } from './Map.styled';

const Map = () => {
  return (
    <MapWrapper>
      <StyledMapContainer center={[51.111, 17.036]} zoom={8} zoomControl={false} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { Map };
