import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";
import store, { persistor } from "../store/store";
import "../styles/styles.scss";
import Layout from "../components/layout/Layout";

// fonts
import "../fonts/styles.css";

const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || (
      page => <Provider store={store}>
       <Layout>{page}</Layout>

        </Provider>
    )
    return getLayout(<Component {...pageProps} /> )
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
