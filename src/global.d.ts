import 'i18next';

import { resources } from '@shared/services/i18n/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.ru;
  }
}
