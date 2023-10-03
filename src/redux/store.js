import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import filterReducer from "./slices/filterSlice";
import { nftApi } from "./slicesApi/fetchData";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
});

setupListeners(store.dispatch);
