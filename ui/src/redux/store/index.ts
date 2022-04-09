import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import reducer from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};
const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares),
)
);

export const persistor = persistStore(store);
