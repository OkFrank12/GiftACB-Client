import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Provider } from "react-redux";
import { Store } from "./global/Store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const App = () => {
  const persistor = persistStore(Store);
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={MainRouter} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
