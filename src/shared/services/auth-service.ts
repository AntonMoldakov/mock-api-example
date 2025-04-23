import { RefreshTokenApiV1AuthRefreshTokenPostApiResponse } from '@shared/api';
import { AppConfig } from '@shared/config/app-config';
import { store } from '@shared/store';
import { authActions } from '@shared/store/ducks/auth';
import { jwtDecode } from 'jwt-decode';

const isTokenFresh = (token: string, safeSeconds = 60) => {
  try {
    const jwtPayload = jwtDecode(token);
    const currentUnixTimestamp = Math.round(Date.now() / 1000);

    if (!jwtPayload.exp) return false;

    return currentUnixTimestamp < jwtPayload.exp - safeSeconds;
  } catch {
    return false;
  }
};

export class AuthService {
  private accessToken: string | null;

  private refreshToken: string | null;

  constructor(accessToken: string | null, refreshToken: string | null) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  async getAccessTokenAsync(): Promise<string | null> {
    if (!this.accessToken) {
      return Promise.resolve(null);
    }

    if (isTokenFresh(this.accessToken)) {
      return Promise.resolve(this.accessToken);
    }

    if (!this.refreshToken) {
      return Promise.resolve(null);
    }

    const newAccessToken = await this.refreshAccessToken();

    return newAccessToken || null;
  }

  async forceRefreshAccessTokenAsync() {
    if (!this.accessToken) {
      return Promise.resolve(null);
    }

    if (!this.refreshToken) {
      return Promise.resolve(null);
    }

    await this.refreshAccessToken();
  }

  private async refreshAccessToken() {
    try {
      const response = (await fetch(
        `${AppConfig.BASE_API_URL}/v1/auth/refresh-token`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.refreshToken}`,
          },
        }
      ).then((res) =>
        res.json()
      )) as RefreshTokenApiV1AuthRefreshTokenPostApiResponse;

      store.dispatch(
        authActions.setTokens({
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
        })
      );

      return response.access_token;
    } catch {
      return null;
    }
  }
}

export const logout = async () => {
  store.dispatch(authActions.logout());
};
