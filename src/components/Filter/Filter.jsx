export const Filter = ({ onInputHandle, filterValue }) => {
  return (
    <input
      type="text"
      name="filter"
      onInput={onInputHandle}
      value={filterValue.value}
    />
  );
};
