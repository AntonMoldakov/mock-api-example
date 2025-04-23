// import { http, HttpResponse } from 'msw';

import { getFastAPIMock } from './generated/fastAPI';

export const handlers = [
  ...getFastAPIMock(),
  //   http.post('/api/v1/register/start', () => {
  //     return HttpResponse.json({
  //       register_token: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  //     });
  //   }),
];
