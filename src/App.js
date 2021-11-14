import React, { useState, useEffect, Component } from 'react';
// import s from './App.module.css';
// import shortid from 'shortid';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// function App() {
// const [filter, setFilter] = useState('');
// const [contacts, setContacts] = useLocalStorage('contacts', [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]);

// const addContactHandler = (name, number) => {
//   const newContact = {
//     name,
//     number,
//     id: shortid.generate(),
//   };

// const duplicateContact = contacts.find(contact => contact.name === name);
// if (duplicateContact) {
//   alert(`${name} is already in contacts`);
//   return;
// }

//   setContacts(state => [newContact, ...state]);
// };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const deleteContact = contactId => {
//   setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
//   resetFilter();
// };

// const resetFilter = () => {
//   setFilter('');
// };

// const visibleContacts = getVisibleContacts();

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  render() {
    return (
      <>
        {/* <Form onSubmit={addContactHandler} />
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} /> */}

        <Form />
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
