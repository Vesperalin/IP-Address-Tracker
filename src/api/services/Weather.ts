import { weatherClient } from 'api/clients/weatherClient';
import { useQuery } from 'react-query';

import { OwnIPData } from 'models/OwnIPData';

export default {
  useOnwIP: () => {
    const queryData = useQuery<OwnIPData, Error>('myIP',async () => {
      const response = await weatherClient.get<OwnIPData>('/ip.json', {
        params: {
          q: 'auto:ip',
        }
      });
      return response.data;
    }, {
      enabled: false,
      refetchOnWindowFocus: false
    });
    return queryData;
  }
};
