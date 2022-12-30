import PropTypes from 'prop-types';

import { Btn } from './DeleteButton.styled';

export const DeleteButton = ({ text, type, handleClick, id }) => {
  return (
    <Btn type={type} onClick={() => handleClick(id)}>
      {text}
    </Btn>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
