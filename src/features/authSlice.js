import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthentification: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    userAuthentificationDelete: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const selectToken = (state) => state.auth.token;

export const { userAuthentification, userAuthentificationDelete } =
  authSlice.actions;
export default authSlice.reducer;
