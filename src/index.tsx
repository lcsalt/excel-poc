import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './styles/variables.css';
import './styles/global.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { ProvideError } from './contexts/useError';
import { ProvideLoadingBar } from './contexts/useLoadingBar';
import { ProvideAuth } from './contexts/useAuth';
import { onProfilerRender } from './utils/performance';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/theme';
import './translation/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ProvideError>
        <ProvideLoadingBar>
          <ProvideAuth>
            <Profiler id="App" onRender={onProfilerRender}>
              <App />
            </Profiler>
          </ProvideAuth>
        </ProvideLoadingBar>
      </ProvideError>
    </MantineProvider>
  </React.StrictMode>
);

// console.log or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
