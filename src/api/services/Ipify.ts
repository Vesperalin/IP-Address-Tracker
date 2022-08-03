import { ipifyClient } from 'api/clients/ipifyClient';
import { useQuery } from 'react-query';
import { AddressResponse } from 'models/AddressResponse';

const validIPPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export default {
  useAddress: (address: string) => {
    const queryData = useQuery<AddressResponse, Error>(['address', address], async () => {
      const params = validIPPattern.test(address) ? { ipAddress: address } : { domain: address };
      const response = await ipifyClient.get<AddressResponse>('/country,city', { params });
      return response.data;
    }, {
      enabled: address !== '',
    });
    return queryData;
  }
};
