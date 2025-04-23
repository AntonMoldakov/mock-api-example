import { generatedApi } from './generated-api';

export * from './generated-api';

export const enhancedApi = generatedApi.enhanceEndpoints({
  endpoints: {},
});
