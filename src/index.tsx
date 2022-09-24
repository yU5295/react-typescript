import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";
import { Provider } from "react-redux";
import App from "./App";
import store from "./state";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./theme";
import UserUpdater from "./state/user/updater";
import "assets/styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Updaters() {
  return (
    <>
      <UserUpdater />
    </>
  );
}

ReactDOM.render(
  <DAppProvider config={{}}>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Updaters />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </DAppProvider>,
  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
