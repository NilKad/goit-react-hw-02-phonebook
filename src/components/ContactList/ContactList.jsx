import css from './ContactList.module.css';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filterEl: PropTypes.string.isRequired,
  onDeletePhonebookID: PropTypes.func.isRequired,
};
