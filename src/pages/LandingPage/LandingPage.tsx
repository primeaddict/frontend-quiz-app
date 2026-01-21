import { Link } from 'react-router-dom';
import style from './LandingPage.module.scss';
import { ROUTES } from '../../routes';

export const LandingPage = () => {
  return (
    <div className={style.notfound}>
      <h1 className={style.code}>Welcome to the Quiz</h1>
      <h2 className={style.title}>Start your quiz journey!</h2>
      <p className={style.description}>No login required.</p>
      <Link to={ROUTES.quiz} className={style.homeButton}>
        Start Quiz
      </Link>
    </div>
  );
};
