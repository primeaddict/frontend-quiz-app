import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../constant';
import { getCategories } from '../api';

export const useGetCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEY.CATEGORY],
    queryFn: getCategories,
    enabled: true,
    staleTime: 1000 * 60 * 10,
  });
};
