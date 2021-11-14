import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Type name for search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({ filter: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
