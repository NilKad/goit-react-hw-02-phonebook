import css from './Filter.module.css';

export const Filter = ({ onInputHandle, filterValue, clearFilter }) => {
  const onKeyDown = e => {
    e.key === 'Escape' && clearFilter();
  };

  return (
    <input
      type="text"
      name="filter"
      className={css.input}
      onInput={onInputHandle}
      onKeyDown={onKeyDown}
      value={filterValue}
    />
  );
};
