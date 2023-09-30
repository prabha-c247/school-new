import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSettingPersonalDetails,passwordSecurity } from "../../helper/ApiHelper";
import { loginUserAsync } from "./userReducer"; 
import {changePassword} from "../../helper/Types";

export const getUserData = createAsyncThunk(
  'setting/getUserPersonalData',
  async () => {
    try {
      const response = await getSettingPersonalDetails();
      console.log( response.data,"fetched user data successfully!")      
      return response.data.data;
    } catch (error) {
      console.error("getUserPersonalData call failed:", error);
      throw error;
    }
  }
);

export const passwordChanged = createAsyncThunk(
  'setting/changePassword',
  async (passwordField: Partial<changePassword>) => {
    try {
      const response = await passwordSecurity(passwordField);
      console.log( response,"change password successful!")
      return response;      
    } catch (error) {
      console.error("changePassword call failed:", error);
      throw error;
    }
  }
);

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    profileImage: null as string | null ,
    contactNumber: null as string | null,
    name: null as string | null,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {        
      })
      .addCase(getUserData.fulfilled, (state, action) => {        
        const { profileImage, contactNumber, name } = action.payload;
        state.profileImage = profileImage;
        state.contactNumber = contactNumber;
        state.name = name;
        state.error = null;
      })
      .addCase(getUserData.pending, (state) => {       
      })
      .addCase(getUserData.rejected, (state, action) => {       
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default settingSlice.reducer;
