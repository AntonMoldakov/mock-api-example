import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppConfig } from '@shared/config/app-config';
import { RootState } from '@shared/store';
import { AuthService } from '@shared/services/auth-service';
import queryString from 'query-string';

const baseUrl =
  AppConfig.USE_MOCK_API !== 'true' ? AppConfig.BASE_API_URL : '/';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, api) => {
      const { accessToken, refreshToken } = (api.getState() as RootState).auth;

      const token = await new AuthService(
        accessToken,
        refreshToken
      ).getAccessTokenAsync();

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
    paramsSerializer: (params) => {
      return queryString.stringify(params);
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['api'],
});
