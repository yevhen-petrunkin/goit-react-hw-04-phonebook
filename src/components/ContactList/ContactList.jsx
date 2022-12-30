import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { Contact } from './Contact';

export const ContactList = ({ contacts, handleClick }) => {
  return contacts.length ? (
    <List>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.name}
            contact={contact}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  ) : (
    <p>Oops... No contacts found.</p>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
