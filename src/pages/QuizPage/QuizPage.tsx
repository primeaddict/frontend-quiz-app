import { getCategories } from '../../apis';

export const QuizPage = () => {
  const categories = getCategories();
  console.log('categories', categories);
  return <div>Quizs</div>;
};
