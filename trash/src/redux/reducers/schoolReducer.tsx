import { createSlice,PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {GetAllSchools,AddSchool, EditSchool} from "../../helper/ApiHelper";
import { School } from "../../helper/Types";

interface SchoolState {
  schools: School[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
const initialState: SchoolState = {
  schools: [],
  loading: 'idle',
  error:  null,
};
const apiUrl = process.env.REACT_APP_BASE_URL
const token = localStorage.getItem('token');

export const addSchoolAsync = createAsyncThunk('school/addSchool', async (newSchoolData: Partial<School>) => {
  try {
    const response = await AddSchool.post(`${apiUrl}/school/add-school`, newSchoolData);
    return response.data as School;
  } catch (error) {
    throw error;
  }
});

export const editSchoolAsync = createAsyncThunk(
  'school/editSchool',
  async ({ id, inputData }: { id: number; inputData: Partial<School> }) => {
    try {
      const response = await EditSchool.put(`${apiUrl}/school/edit-school/${id}`, inputData);
      return response.data as School;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllSchoolsAsync = createAsyncThunk('school/getAllSchools', async () => {
  try {
    const response = await GetAllSchools.get(`${apiUrl}/school/school-list`);
    return response.data as School[];
  } catch (error) {
    throw error;
  }
});

 const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {      
      addSchool: (state, action: PayloadAction<School>) => {
        state.schools.push(action.payload);
      },
      editSchool: (state, action: PayloadAction<{ id: number; inputData: Partial<School> }>) => {
        const { id, inputData } = action.payload;
        const schoolIndex = state.schools.findIndex(school => school.id === id);
        if (schoolIndex !== -1) {
          state.schools[schoolIndex] = { ...state.schools[schoolIndex], ...inputData };
        }
      },      
    },
    extraReducers: builder => {
      // ... your other cases ...
  
      builder.addCase(addSchoolAsync.fulfilled, (state, action) => {
        state.schools.push(action.payload);
      });
  
      builder.addCase(editSchoolAsync.fulfilled, (state, action) => {
        const updatedSchool = action.payload;
        const schoolIndex = state.schools.findIndex(school => school.id === updatedSchool.id);
        if (schoolIndex !== -1) {
          state.schools[schoolIndex] = updatedSchool;
        }
      });
  
      builder.addCase(getAllSchoolsAsync.fulfilled, (state, action) => {
        state.schools = action.payload;
      });
    },
  });

  export const { editSchool, addSchool } = schoolSlice.actions;
  export default schoolSlice.reducer;



  
