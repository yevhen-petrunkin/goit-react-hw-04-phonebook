import PropTypes from 'prop-types';
import { SubTitle } from './SubHeading.styled';

export const SubHeading = ({ subtitle }) => {
  return <SubTitle>{subtitle}</SubTitle>;
};

SubHeading.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
