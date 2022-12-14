import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducer from './greetings/greetings';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    greeting: Reducer,
  },
  middleware: [thunk, logger],
});

export default store;
