import { combineReducers, legacy_createStore as createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import mainReducer from "./reducers/mainReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  main: mainReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["main"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
export const storePersisted = persistStore(store);

export default store;
