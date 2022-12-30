import PropTypes from 'prop-types';

import { Btn } from './SubmitButton.styled';

export const SubmitButton = ({ text, type }) => {
  return <Btn type={type}>{text}</Btn>;
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
