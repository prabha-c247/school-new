import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Plan } from "../../helper/Types";
import { CreatePlan, GetAllPlans, ViewPlan } from "../../helper/ApiHelper";

interface PlanState {
  Plans: Plan[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  enteredPlanData: Partial<Plan> | null; // for viewing data entered by user
}

const initialState: PlanState = {
  Plans: [],
  loading: 'idle',
  error: null,
  enteredPlanData: null, 
};

export const planHistoryAsync = createAsyncThunk('plan/allPlans', async () => {
  try {
    const response = await GetAllPlans();
  //  console.log(response.data.data,"plan history fetched successfully!")
    return response.data.data as Plan[];
  } catch (error) {
    throw error;
  }
});

export const singlePlanAsync = createAsyncThunk(
  'plan/singlePlan',
  async ( id:number ) => {
    try {
      const response = await ViewPlan(id, {});
      console.log(response,"view single plan ")
      return response.data.data as Plan;
    } catch (error) {
      throw error;
    }
  }
);

export const createPlanAsync = createAsyncThunk('plan/createPlan', async (planData: Partial<Plan>) => {
  try {
    const response = await CreatePlan(planData);
    // console.log(response.data.data,"create plan post successfully!")
    return response.data.data as Plan;
  } catch (error) {
    // console.log(error,"err in create plan")
    throw error;
  }
});

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    createPlan: (state, action: PayloadAction<Plan>) => {
      state.Plans.push(action.payload);
    },
    viewPlan: (state, action: PayloadAction<{ id: number; inputData: Partial<Plan> }>) => {
      const { id, inputData } = action.payload;
      const planIndex = state.Plans.findIndex((plan) => plan._id === id);
      if (planIndex !== -1) {
        state.Plans[planIndex] = { ...state.Plans[planIndex], ...inputData };
      }
    },
    storeEnteredPlanData: (state, action: PayloadAction<Partial<Plan>>) => {
      state.enteredPlanData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPlanAsync.fulfilled, (state, action) => {
        state.Plans.push(action.payload);
      })
      .addCase(singlePlanAsync.fulfilled, (state, action) => {
        const updatedPlanIndex = state.Plans.findIndex(plan => plan._id === action.payload._id);
        if (updatedPlanIndex !== -1) {
          state.Plans[updatedPlanIndex] = action.payload;
        }
      })
      .addCase(planHistoryAsync.fulfilled, (state, action) => {
        state.Plans = action.payload;
      })
      .addCase(createPlanAsync.pending, (state) => {      
      })
      .addCase(createPlanAsync.rejected, (state, action) => {        
      });
  },
});

export const { actions: planActions, reducer: planReducer } = planSlice;

export default planSlice.reducer;