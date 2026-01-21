import { Categories } from '../../apis';
import { Tag } from '../core-components';

type CategoriesFilterProps = {
  categories: Categories;
};

export const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  return (
    <div>
      {categories.map(({ name }) => {
        return <Tag label={name} />;
      })}
    </div>
  );
};
