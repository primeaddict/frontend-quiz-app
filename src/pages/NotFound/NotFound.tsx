import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';
import { ROUTES } from '../../routes';

export const NotFound = () => {
  return (
    <div className={style.notfound}>
      <h1 className={style.code}>404</h1>
      <h2 className={style.title}>Page Not Found</h2>
      <p className={style.description}>
        Sorry, the page you’re looking for doesn’t exist or was moved.
      </p>
      <Link to={ROUTES.home} className={style.homeButton}>
        Go Back Home
      </Link>
    </div>
  );
};
