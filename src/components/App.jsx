import { nanoid } from 'nanoid';
import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      filter: '',
    };
  }
  formHandler = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ],
    }));

    event.target.reset();
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      if (filter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  };
  handlefilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  contactDelete = contactId => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts.filter(contact => contact.id !== contactId),
      ],
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm handleFunction={this.formHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} handleFunction={this.handlefilter} />
        <ContactsList
          contacts={this.filterContacts()}
          deleteHandler={this.contactDelete}
        />
      </div>
    );
  }
}
