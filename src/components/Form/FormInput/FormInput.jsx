import PropTypes from 'prop-types';

import { Label, Input } from './FormInput.styled';

export const FormName = ({ value, onChange }) => {
  return (
    <Label>
      Name
      <Input
        name="name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};

export const FormNumber = ({ value, onChange }) => {
  return (
    <Label>
      Number
      <Input
        name="number"
        type="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={onChange}
        value={value}
        required
      />
    </Label>
  );
};

FormName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormNumber.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
