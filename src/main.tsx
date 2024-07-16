import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import WebApp from '@twa-dev/sdk'

WebApp.ready();

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://vodanh86.github.io/my-twa/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <App />
        </TonConnectUIProvider>,
      </BrowserRouter>
  </React.StrictMode>

)
