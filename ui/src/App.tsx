import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        {/* <ToastContainer /> */}
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
}

export default App;
