import { RouteObject } from 'react-router-dom';
import { LandingPage, NotFound, QuizPage } from '../pages';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
