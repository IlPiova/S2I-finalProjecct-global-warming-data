import { configureStore } from "@reduxjs/toolkit";
import { DataApi } from "../services/DataQuery";

export const store = configureStore({
  reducer: { [DataApi.reducerPath]: DataApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DataApi.middleware),
});
