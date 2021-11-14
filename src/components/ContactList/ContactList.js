import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(contacts);

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            {`${name}: ${number}`}
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

// const mapStateToProps = state => {
//   console.log(state);
//   const { items, filter } = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const normalizeContacts = filter.toLowerCase();
//   const visibleContacts = items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizeContacts),
//   );

//   return {
//     contacts: visibleContacts,
//   };
// };

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;
