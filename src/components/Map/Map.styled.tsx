import { MapContainer } from 'react-leaflet';
import Loader from 'react-ts-loaders';
import styled from 'styled-components';

const MapWrapper = styled.main`
  position: relative;

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

const DataContainer = styled.div`
  background-color: white;
  width: 320px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 500;
  text-align: center;
  padding: 15px 0;
  border-radius: 20px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  transform: translateY(-50%);

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      flex-direction: row;
      min-width: 900px;
      min-height: 120px;
      height: 120px;
      align-items: flex-start;
      justify-content: space-between;
      padding: 20px 0;
      text-align: left;
    }
  }
`;

const Title = styled.p`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.darkGrey};
  font-size: ${({ theme }) => theme.font.size.title};

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      margin-bottom: 5px;
    }
  }
`;

const Separator = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      display: block;
      width: 1px;
      border: 1px solid #adadad53;
      height: 100%;
    }
  }
`;

const Value = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.value};
  color: ${({ theme }) => theme.color.veryDarkGray};
  text-overflow: ellipsis;
`;

const DataCell = styled.div`
  width: 250px;
  margin: 5px 0;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      padding: 0 25px;
    }
  }
`;

export { StyledMapContainer, MapWrapper , LoaderWrapper, DataContainer, Title, Value, DataCell, Separator };
