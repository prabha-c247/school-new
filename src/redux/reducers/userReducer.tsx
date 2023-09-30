import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import {LoginUser} from "../../helper/ApiHelper";
import {login} from "../../helper/Types";
import { ANALYTICS } from '../../helper/PageRoute';
import { resolve } from 'path';

const apiUrl = process.env.REACT_APP_BASE_URL
export const loginUserAsync = createAsyncThunk(
  
  'auth/loginUser',
  async (credentials: login) => {
    try {      
      const response = await LoginUser( `${apiUrl}/login`, credentials);       
      const userInfo = response.data;
      const token= await response.data.token;   
      localStorage.setItem('token',JSON.stringify(token));
      return userInfo;      
    } catch (error) {      
      console.error("API call failed:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    data: null,
    loading: false,
    error: null,
    errorMessage: null,
  } as {isAuthenticated: boolean; data: login | null; loading: boolean; error: string | null; errorMessage: string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
        state.errorMessage = null; // Set errorMessage to null on pending
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        state.errorMessage = null; // Set errorMessage to null on fulfilled
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = null; // Set error to null
        console.log(action.error.message);
        console.log(action)
        if (action.error.message ==="Request failed with status code 401")
        {
          state.error = "The email/password is incorrect"
        }
        else {
          state.errorMessage  = action.error?.message?? null;
          // console.log(state.errorMessage)
        }
        // state.errorMessage = action.error?.message ?? null; // Set errorMessage to error.message or null
      });
  },
});

  export const { actions: userActions, reducer: userReducer } = userSlice;