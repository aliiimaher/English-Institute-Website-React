import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MyRoutes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MyRoutes />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
