import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsSlice from 'redux/contacts/contactsSlice';
import filterSlice from 'redux/contacts/filterSlice';
import authSlice from 'redux/auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore(
  {
    reducer: {
      contacts: contactsSlice,
      filter: filterSlice,
      auth: persistReducer(persistConfig, authSlice),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  enhancer
);

export const persistor = persistStore(store);
export default store;
