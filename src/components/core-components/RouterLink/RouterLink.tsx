import { Link, LinkProps } from 'react-router-dom';
import style from './RouterLink.module.scss';
export const RouterLink = (props: LinkProps) => {
  return (
    <div className={style.link}>
      <Link {...props} />
    </div>
  );
};
