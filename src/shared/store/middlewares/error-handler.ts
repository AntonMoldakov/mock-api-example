import { isRejected, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { authActions } from '../ducks/auth';
import { ErrorPayload } from '../types';

export const rtkQueryErrorHandler: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejected(action)) {
    const errorPayload = action.payload as ErrorPayload;

    if (errorPayload?.status === 401) {
      api.dispatch(authActions.logout());
    }
  }

  return next(action);
};
