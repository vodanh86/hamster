import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { MANIFEST_URL } from './config/Config';
import WebApp from '@twa-dev/sdk'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
          <App />
        </TonConnectUIProvider>,
      </BrowserRouter>
  </React.StrictMode>

)
