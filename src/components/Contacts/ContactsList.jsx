import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactsItem } from './ContactsItem';
import { List} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ name, number, id }) => (
          <ContactsItem
            key={nanoid()}
            name={name}
            number={number}
            id={id}
            deleteButton={onDeleteContact}
          />
        ))}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
