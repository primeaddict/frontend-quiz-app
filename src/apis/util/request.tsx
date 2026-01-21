import axios from 'axios';
import { RequestProps } from '../interface';

export const request = ({ method, url }: RequestProps) => {
  return axios({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
