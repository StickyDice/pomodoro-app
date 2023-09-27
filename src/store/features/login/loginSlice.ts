import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
   username: string;
   email: string;
}

const initialState = {
   user: {
      username: "",
      email: "",
   } as IUser
};

export const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {
      login: ( state, action: PayloadAction<IUser> ) => {
         state.user = {
            username: action.payload.username,
            email: action.payload.email
         };
      }
   }
});

export const { login } = loginSlice.actions;

export const getLogin = ( state: RootState ) => state.login;

export const loginSliceReducer = loginSlice.reducer;
