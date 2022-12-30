import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Heading } from './Heading';
import { FormBox } from './Form';
import { SubHeading } from './SubHeading';
import { Search } from './Search';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContactHandler = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmitHandler = formData => {
    const doesMatch = this.checkContactsForMatches(formData);
    if (doesMatch) {
      this.showAlertMessage(formData.name);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(6), ...formData }, ...contacts],
    }));
  };

  showAlertMessage = contactName =>
    alert(`${contactName} is already in contacts.`);

  searchHandler = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
  };

  checkContactsForMatches = formData => {
    const { contacts } = this.state;
    const normalizedName = formData.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box
        width="768px"
        height="100vh"
        m="0 auto"
        pt="20px"
        pb="20px"
        bg="rgb(239 239 239)"
        as="main"
      >
        <Box pl="20px" as="section">
          <Heading title="Phonebook" />
          <FormBox onSubmit={this.formSubmitHandler} />
          <Box
            width="720px"
            pl="20px"
            bg="white"
            borderRadius="8px"
            boxShadow="1px 1px 6px black"
            as="section"
          >
            <SubHeading subtitle="Contacts" />
            <Search
              searchLabel="Find contacts by name"
              value={filter}
              onChange={this.searchHandler}
            />
            <Box height="20em" bg="white">
              <ContactList
                contacts={visibleContacts}
                handleClick={this.deleteContactHandler}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

// ======Old But Working Version======

// formSubmitHandler = formData => {
//   const array = [...this.state.contacts];
//   console.log(array);
//   array.push(formData);
//   this.setState({ contacts: [...array] });
// };
