import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('user')) || null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      localStorage.setItem('user', JSON.stringify(state));
      return state;
    },
    removeUser: (state) => {
      localStorage.removeItem('user');
      return null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
