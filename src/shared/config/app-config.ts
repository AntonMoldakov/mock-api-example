interface AppConfigI {
  ENVIRONMENT: 'production' | 'development';
  USE_MOCK_API: string;
  BASE_API_URL: string;
  VITE_JSON_API_URL: string;
}

export const AppConfig: AppConfigI = {
  ENVIRONMENT: import.meta.env.MODE as AppConfigI['ENVIRONMENT'],
  USE_MOCK_API: import.meta.env.VITE_USE_MOCK_API,
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
  VITE_JSON_API_URL: import.meta.env.VITE_JSON_API_URL,
};
