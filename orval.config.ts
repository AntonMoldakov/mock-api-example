export default {
  'petstore-file-transfomer': {
    output: {
      mode: 'single',
      target: './src/shared/api/mock/generated',
      schemas: './src/shared/api/mock/models',
      mock: true,
    },
    input: {
      target: './src/shared/api/openapi.json',
    },
  },
};
