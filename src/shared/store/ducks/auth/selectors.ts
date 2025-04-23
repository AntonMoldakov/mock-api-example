import { RootState } from '@shared/store';

export const authSelectors = {
  selectIsAuthorized: (state: RootState) => Boolean(state.auth.accessToken),
  selectAccessToken: (state: RootState) => state.auth.accessToken,
  selectRefreshToken: (state: RootState) => state.auth.refreshToken,
};
