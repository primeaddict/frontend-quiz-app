import './Tag.module.scss';
import { ButtonProps } from './interface';

export const Tag = ({ label, onClick }: ButtonProps) => {
  return <span onClick={onClick}>{label}</span>;
};
