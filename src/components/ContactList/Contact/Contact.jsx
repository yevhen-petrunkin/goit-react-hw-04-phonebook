import PropTypes from 'prop-types';
import { DeleteButton } from '../../DeleteButton';

export const Contact = ({ contact, handleClick }) => (
  <li style={{ marginBottom: '20px' }}>
    {contact.name}: {contact.number}{' '}
    <DeleteButton
      type="button"
      text="Delete"
      handleClick={handleClick}
      id={contact.id}
    />
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
