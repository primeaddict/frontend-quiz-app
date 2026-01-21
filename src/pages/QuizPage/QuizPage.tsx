import { CategoriesFilter, Loader } from '../../components';
import { useGetCategories } from '../../apis';

export const QuizPage = () => {
  const { data: categories, isFetching } = useGetCategories();

  if (isFetching || categories === undefined) {
    return <Loader />;
  }
  return (
    <div>
      <CategoriesFilter categories={categories} />
    </div>
  );
};
