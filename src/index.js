import "react-perfect-scrollbar/dist/css/styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { CssBaseline } from "@material-ui/core";
import configureAppStore, { history } from "./redux/configureAppStore";
import i18n from "./i18n";
import theme from "./styles/theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const { store, persistor } = configureAppStore({});

ReactDOM.render(
  <React.Suspense fallback={null}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <CssBaseline />
              <App />
            </ConnectedRouter>
          </ThemeProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.Suspense>,
  document.getElementById("root")
);

reportWebVitals();
