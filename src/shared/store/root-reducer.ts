import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { api } from '@shared/api/api';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authActions, authReducer } from './ducks/auth';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

export const rootReducerWithLogout = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === authActions.logout.type) {
    const newState = rootReducer(undefined, action);

    return {
      ...newState,
    };
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducerWithLogout);

export default persistedReducer;
