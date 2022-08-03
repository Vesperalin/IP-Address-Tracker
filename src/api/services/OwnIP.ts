import { onwIPClient } from 'api/clients/ownIPClient';
import { useQuery } from 'react-query';

import { OwnIP } from 'models/OwnIP';

export default {
  useOnwIP: () => {
    const queryData = useQuery<OwnIP, Error>(['myIP', 'myIP'], async () => {
      const response = await onwIPClient.get<OwnIP>('/json/');
      return response.data;
    }, {
      enabled: false,
    });
    return queryData;
  }
};
