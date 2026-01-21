import { Method } from './constant';
import { request } from './util';

export const getCategories = () => {
  return request({
    method: Method.GET,
    url: 'https://irlcpeeymhgjficwvzrk.supabase.co/functions/v1/list-categories',
  });
};
