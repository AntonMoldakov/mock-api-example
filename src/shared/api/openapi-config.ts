import { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './openapi.json',
  apiFile: './api.ts',
  apiImport: 'api',
  outputFile: './generated-api.ts',
  useEnumType: true,
  exportName: 'generatedApi',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
};

export default config;
