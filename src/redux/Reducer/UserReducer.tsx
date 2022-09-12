import { createSlice } from '@reduxjs/toolkit';
interface State {
    user: any;
    authToken: any;
    rememberEmail: any;
  }
export const userReducer = createSlice({
  name: 'user',
  initialState: {
    authToken: null,
  },

  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const {
  setAuthToken,
} = userReducer.actions;

export default userReducer.reducer;