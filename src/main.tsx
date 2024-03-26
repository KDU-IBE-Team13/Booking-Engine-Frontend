import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './Theme';

import * as Sentry from "@sentry/react";
import './utils/i18n'

// Sentry.init({
//   dsn: "https://6fa1765a1ecb24db948ef51c5c5c8a2d@o4506863506554880.ingest.us.sentry.io/4506863629238272",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0, 
//   tracePropagationTargets: [],
//   replaysSessionSampleRate: 0.1, 
//   replaysOnErrorSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider> 
  </React.StrictMode>,
)