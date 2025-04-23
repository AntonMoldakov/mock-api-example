import { Middleware } from '@reduxjs/toolkit';
import { api } from '@shared/api/api';

import { rtkQueryErrorHandler } from './error-handler';

export const middlewares: Array<Middleware> = [api.middleware, rtkQueryErrorHandler];
