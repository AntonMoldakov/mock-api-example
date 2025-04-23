import '@assets/styles/base/base.scss';
import { I18nProvider } from './providers/i18n/i18n-provider';
import { ReduxProvider } from './providers/redux/redux-provider';

function App() {
  return (
    <I18nProvider>
      <ReduxProvider>
        <div />
      </ReduxProvider>
    </I18nProvider>
  );
}

export default App;
