import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
setupListeners(store.dispatch);
