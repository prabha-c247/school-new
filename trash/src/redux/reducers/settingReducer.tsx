import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getSettingPersonalDetails} from "../../helper/ApiHelper";
import { loginUserAsync } from "./userReducer";
const apiUrl = process.env.REACT_APP_BASE_URL

export const personalSettingData = createAsyncThunk(
  
  'auth/loginUser',
  async () => {
    try {
      // Call your API function here with the provided credentials
      // const response = await LoginUser( `${apiUrl}/setting/650be9dcbcd7e6112977d65e`);  
      //  const userInfo = response.data;  
      // return userInfo;
    } catch (error) {
      // Handle errors if the API call fails
      console.error("API call failed:", error);
      throw error;
    }
  }
);
export const getUserData = createAsyncThunk('/setting/personalData', async () => {
    const response = await getSettingPersonalDetails(`${apiUrl}/setting/65098907c8568941d81b4bb6`);
    return response.data ; // Return the fetched data
  });

const settingSlice = createSlice({
  name: "setting",
  initialState: {    
    profileImage: "",
    contactNumber:"",
    name:"",
    error:null,
  },

  reducers: {
    
  },
  extraReducers:(builder) =>{
    builder
    .addCase(loginUserAsync.pending, (state)=>{
      // state.error = null;
      // state.profileImage= null | string;
      // state.name= null;
      // state.contatNumber = null;
    })
  }
});