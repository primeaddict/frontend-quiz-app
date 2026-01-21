import { Method } from '../constant';
import { Categories } from '../interface';
import { request } from '../util';

export const getCategories = (): Promise<Categories> => {
  return request({
    method: Method.GET,
    url: 'https://irlcpeeymhgjficwvzrk.supabase.co/functions/v1/list-categories',
  });
};
