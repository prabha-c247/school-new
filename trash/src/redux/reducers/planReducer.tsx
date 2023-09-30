import { createSlice } from '@reduxjs/toolkit';
import { Plan } from "../../helper/Types";


const planSlice = createSlice({
    name: 'plan',
    initialState: [] as Plan[],
    reducers: {
      // Define user-related actions and reducers here
    },
  });
  
  export const { actions: planActions, reducer: planReducer } = planSlice;