import { configureStore } from '@reduxjs/toolkit';
import reducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: { contacts: reducer },
  devtools: process.env.NODE_ENV === 'development',
});
export default store;

//VANILLA REDUX

// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: reducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
