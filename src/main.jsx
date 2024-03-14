import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import global_en from './translation/en/global.json';
import global_id from './translation/id/global.json';
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "id",
  resources: {
    en: {
      global: global_en
    },
    id: {
      global: global_id
    }
  }
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
)
