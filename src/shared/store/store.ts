import { configureStore } from '@reduxjs/toolkit';
import { AppConfig } from '@shared/config/app-config';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';

import { middlewares } from './middlewares';
import reducer from './root-reducer';

export const store = configureStore({
  reducer,
  devTools: AppConfig.ENVIRONMENT === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // https://github.com/reduxjs/redux-toolkit/issues/415
      immutableCheck: false,
    }).concat(...middlewares),
});

export const persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
