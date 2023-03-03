import React, { Component } from 'react';

import { GlobalStyles } from 'components/GlobalStyles';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContainerPhoneBook } from 'components/App/App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    let normalizedName = name.toLowerCase();
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(({ contacts }) => {
      let id = contacts.length + 1;
      return {
        contacts: [...contacts, { id, name, number }],
      };
    });
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const renderFilter = this.getFilter();

    return (
      <>
        <GlobalStyles />
        <ContainerPhoneBook>
          <ContactForm addContact={this.addContact} />
          <div>
            <Filter value={filter} filterChange={this.handleFilterChange} />
            <ContactsList
              contacts={renderFilter}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </ContainerPhoneBook>
      </>
    );
  }
}
