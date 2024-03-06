import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c42c7a6c5acac43330297811e7576b5d@o4506863506554880.ingest.us.sentry.io/4506863589588992",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost"],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
