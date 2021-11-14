import shortid from 'shortid';
import { ADD, DELETE, FILTER } from '../action-types';

export const addContact = (name, number) => ({
  type: ADD,
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
});

export const deleteContact = id => ({
  type: DELETE,
  payload: id,
});

export const filterContact = value => ({
  type: FILTER,
  payload: value,
});
