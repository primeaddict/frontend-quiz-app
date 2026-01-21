import './Button.module.scss'
import { ButtonProps } from './interface';

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
