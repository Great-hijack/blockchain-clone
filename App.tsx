import React from "react";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import transactionsReducer from "./src/store/reducers/transactions";
import userReducer from "./src/store/reducers/user";
import { persistConfig } from "./src/store/store";
import Index from "./src/screens";

const rootReducer = combineReducers({
  transactions: persistReducer(persistConfig, transactionsReducer),
  user: persistReducer(persistConfig, userReducer),
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}
