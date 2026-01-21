import { Method } from '../constant';

export interface RequestProps {
  method: Method;
  url: string;
}

export type Categories = Category[];

export interface Category {
  id: number;
  created_at: string;
  name: string;
  value: string;
}
