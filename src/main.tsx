import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { AppConfig } from '@shared/config/app-config';

async function enableMocking() {
  if (AppConfig.USE_MOCK_API !== 'true') {
    return;
  }

  const { worker } = await import('./shared/api/mock/browser');

  return worker.start({
    serviceWorker: {
      url: 'mockServiceWorker.js',
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
