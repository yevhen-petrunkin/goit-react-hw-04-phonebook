import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from '../Box';
import { Form } from './Form.styled';
import { FormName, FormNumber } from './FormInput';
import { SubmitButton } from '../SubmitButton';

export const FormBox = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formData = { name, number };
    onSubmit(formData);
    reset();
  };

  return (
    <Form autocomplete="off" onSubmit={handleSubmit}>
      <Box pb="20px" display="flex" alignItems="center" style={{ gap: '20px' }}>
        <FormName value={name} onChange={handleInputChange} />
        <FormNumber value={number} onChange={handleInputChange} />
      </Box>
      <SubmitButton type="submit" text="Add Contact" />
    </Form>
  );
};

FormBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
