import React from "react";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Pin from "./src/screens/pin";
import transactionsReducer from "./src/store/reducers/transactions";
import { persistConfig } from "./src/store/store";

const rootReducer = combineReducers({
  transactions: persistReducer(persistConfig, transactionsReducer),
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Pin />
      </PersistGate>
    </Provider>
  );
}
