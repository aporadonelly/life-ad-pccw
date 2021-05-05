import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { persistor, store } from "./store";
import i18n from "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.Suspense fallback={null}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <App />,
          </BrowserRouter>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);
reportWebVitals();
