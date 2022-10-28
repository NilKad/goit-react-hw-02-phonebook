import React from 'react';
import css from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addToPhonebook = ({ id, name, number }) => {
    this.setState(PrevState => {
      return { contacts: [...PrevState.contacts, { id, name, number }] };
    });
  };

  onInputHandle = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deletePhonebookID = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddPhonebook={this.addToPhonebook} />
        <h2>Contacts</h2>
        <Filter
          onInputHandle={this.onInputHandle}
          filterValue={this.state.filter}
        />
        <ContactList
          onDeletePhonebookID={this.deletePhonebookID}
          contactList={this.state.contacts}
          filterEl={this.state.filter}
        />
      </div>
    );
  }
}

export default Phonebook;
