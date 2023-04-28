import React, { useEffect, useState } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont, HeadingPage, HeadingSection } from './App.styled';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts ? savedContacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.filter(item => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    const id = nanoid();
    setContacts(prevState => [...prevState, { id, name, number }]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const setFilterValue = newFilter => {
    setFilter(newFilter);
  };

  return (
    <AppCont>
      <HeadingPage>Phonebook</HeadingPage>
      <ContactForm newContact={addContact} />

      <HeadingSection>Contacts</HeadingSection>
      <Filter filter={filter} setFilter={setFilterValue} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
