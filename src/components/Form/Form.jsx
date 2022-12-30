import { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Form } from './Form.styled';
import { FormName, FormNumber } from './FormInput';
import { SubmitButton } from '../SubmitButton';

export class FormBox extends Component {
  static defaultProps = {
    initName: '',
    initNumber: '',
  };

  static propTypes = {
    initName: PropTypes.string.isRequired,
    initNumber: PropTypes.string.isRequired,
  };

  state = {
    name: this.props.initName,
    number: this.props.initNumber,
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const formData = this.state;
    // formData.id = nanoid(6);
    this.props.onSubmit(formData);
    this.reset();
  };

  reset = () => {
    const resetState = Object.keys(this.state).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    this.setState(resetState);
  };

  render() {
    return (
      <Form autocomplete="off" onSubmit={this.handleSubmit}>
        <Box
          pb="20px"
          display="flex"
          alignItems="center"
          style={{ gap: '20px' }}
        >
          <FormName value={this.state.name} onChange={this.handleInputChange} />
          <FormNumber
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </Box>
        <SubmitButton type="submit" text="Add Contact" />
      </Form>
    );
  }
}
