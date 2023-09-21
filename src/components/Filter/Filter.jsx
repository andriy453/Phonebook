import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../../reduxs/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  console.log(filter.Filter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter.Filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
