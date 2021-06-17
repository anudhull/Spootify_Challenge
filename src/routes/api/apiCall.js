import axios from 'axios';
import qs from 'querystring';
import config from '../../../config';

const { api } = config;

export default async(path, resourceType) => {
  const { data: { access_token: token } } = await axios.post(
    api.authUrl,
    qs.stringify({ 'parameter': 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api.clientId}`,
      }
    }
  );

  const res = await axios.get(
    `${api.baseUrl}/browse/${path}?locale=en_US`,
    {  headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data[resourceType].items;
};
