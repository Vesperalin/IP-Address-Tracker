import { useMap } from 'react-leaflet';

interface Props {
  latitude: number | undefined;
  longitude: number | undefined;
}

const MapData = ({ latitude, longitude }: Props) => {
  const map = useMap();
  if (latitude !== undefined && longitude !== undefined) {
    map.setView([latitude, longitude]);
  }
  return null;
};

export { MapData };
