import { createSlice } from '@reduxjs/toolkit';

const initState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
