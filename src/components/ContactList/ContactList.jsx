import css from './ContactList.module.css';

export const ContactList = ({ contactList, filterEl, onDeletePhonebookID }) => {
  return (
    <ul className={css.contactsList}>
      {contactList
        .filter(f => {
          const filter = filterEl.toLowerCase();
          return f.name.toLowerCase().includes(filter);
        })
        .map(el => {
          return (
            <li key={el.id} className={css.item}>
              {el.name}: {el.number}
              <button
                type="button"
                className={css.button}
                onClick={() => onDeletePhonebookID(el.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
