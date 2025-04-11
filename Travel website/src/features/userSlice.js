import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newUser = action.payload;
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser; 
    },
    removeUser: () => {
      localStorage.removeItem("user");
      return null; 
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
