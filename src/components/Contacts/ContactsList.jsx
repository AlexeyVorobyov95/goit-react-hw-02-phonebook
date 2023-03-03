import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, Item, List, Span } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      <h2>Contacts</h2>
      {contacts.length === 0 && (
        <p>The phonebook is empty. Please add a contact.</p>
      )}
      {contacts.map(({ name, number, id }) => (
        <Item key={nanoid()} id={id} nama={name}>
          <Span>{name}</Span>
          {number}
          <Button onClick={() => onDeleteContact(id)} type="button">
            Delete contact
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
