import rootReducer from "./GlobalState";
import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  PAUSE,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});
