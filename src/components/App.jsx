import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Heading } from './Heading';
import { FormBox } from './Form';
import { SubHeading } from './SubHeading';
import { Search } from './Search';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    try {
      let contactData = JSON.parse(localStorage.getItem('contacts'));
      if (contactData) {
        setContacts(contactData);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error.message);
    }
  }, [contacts]);

  const deleteContactHandler = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const checkContactsForMatches = formData => {
    const normalizedName = formData.name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const showAlertMessage = contactName =>
    alert(`${contactName} is already in contacts.`);

  const formSubmitHandler = formData => {
    const doesMatch = checkContactsForMatches(formData);
    if (doesMatch) {
      showAlertMessage(formData.name);
      return;
    }
    setContacts(contacts => [{ id: nanoid(6), ...formData }, ...contacts]);
  };

  const searchHandler = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedSearch = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
  };

  const visibleContacts = getVisibleContacts();

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
        <FormBox onSubmit={formSubmitHandler} />
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
            onChange={searchHandler}
          />
          <Box height="20em" bg="white">
            <ContactList
              contacts={visibleContacts}
              handleClick={deleteContactHandler}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
