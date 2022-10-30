import css from './ContactList.module.css';

export const ContactListItem = ({ element, onDeletePhonebookID, children }) => {
  const { name, number } = element;
  return (
    <li className={css.item}>
      {name}: {number}
      {children}
    </li>
  );
};
