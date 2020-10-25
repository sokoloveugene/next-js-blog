import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
