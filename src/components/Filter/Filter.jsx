export const Filter = ({ onInputHandle, filterValue, clearFilter }) => {
  const onKeyDown = e => {
    e.key === 'Escape' && clearFilter();
  };

  return (
    <input
      type="text"
      name="filter"
      onInput={onInputHandle}
      onKeyDown={onKeyDown}
      value={filterValue}
    />
  );
};
