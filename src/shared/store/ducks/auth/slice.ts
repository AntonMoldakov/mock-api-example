import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { SetTokensPayload } from './types';

type InitialStateType = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: InitialStateType = {
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<SetTokensPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    logout: () => initialState,
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
