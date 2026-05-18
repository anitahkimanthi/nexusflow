import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  role: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

const savedUser = localStorage.getItem("nexusflow-user");

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: Boolean(savedUser),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<User>) => {
      localStorage.setItem("nexusflow-user", JSON.stringify(action.payload));

      return {
        user: action.payload,
        isAuthenticated: true,
      };
    },

    logout: () => {
      localStorage.removeItem("nexusflow-user");

      return {
        user: null,
        isAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
