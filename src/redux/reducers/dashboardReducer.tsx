import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  TotalIncomeType,
  TotalBalanceType,
  TransitionHistoryType,
  MostSellingPlanType,
  OverallSellingPlanType,
} from "../../helper/Types";
import {
  totalIncomeFetch,
  TotalBalance,
  CourseTransitionHistory,
  MostSellingPlan,
  OverallSellingPlan,
} from "../../helper/ApiHelper";

interface DashboardState {
  totalIncome: TotalIncomeType;
  totalBalance: TotalBalanceType;
  transitionHistory: TransitionHistoryType[]; // Update the type here
  sellingPlan: MostSellingPlanType[];
  overAllSellingPlan: OverallSellingPlanType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: DashboardState = {
  totalIncome: {
    message: "",
    weeklyIncome: [
      {
        day: "Monday",
        income: 0,
      },
    ],
    todaysIncome: 0,
    totalIncome: 0,
  },
  totalBalance: {
    message: "",
    data: 0,
  },
  transitionHistory: [],
  sellingPlan: [],
  overAllSellingPlan: [],
  loading: "idle",
  error: null,
};

export const totalIncomeAsync = createAsyncThunk(
  "dashboard/total-income",
  async () => {
    try {
      const response = await totalIncomeFetch();      
      // console.log(response, "fetched TotalIncome successfully!");
      // console.log(response, "totalIncome");
      return response;
    } catch (error) {
      console.error("TotalIncome call failed:", error);
      throw error;
    }
  }
);
export const totalBalanceAsync = createAsyncThunk(
  "dashboard/total-balance",
  async () => {
    try {
      const response = await TotalBalance();
      console.log(response, "total balance");
      return {
        // message: "Successfully fetched total-balance",
        data: response,
      };
    } catch (error) {
      throw error;
    }
  }
);
export const transitionHistoryAsync = createAsyncThunk(
  "dashboard/transition-History",
  async () => {
    try {
      const response = await CourseTransitionHistory();
      // console.log(response, "fetched CourseTransitionHistory successfully!");
      return response;
    } catch (error) {
      // console.error("CourseTransitionHistory call failed:", error);
      throw error;
    }
  }
);
export const sellingPlanAsync = createAsyncThunk(
  "dashboard/selling-Plan",
  async () => {
    try {
      const response = await MostSellingPlan();
      // console.log(response, "fetched MostSellingPlan successfully!");
      return response;
    } catch (error) {
      // console.error("MostSellingPlan call failed:", error);
      throw error;
    }
  }
);
export const overAllSellingPlanAsync = createAsyncThunk(
  "dashboard/All-selling-Plan",
  async () => {
    try {
      const response = await OverallSellingPlan();
      // console.log(response, "fetched allSellingPlan successfully!");
      return response;
    } catch (error) {
      // console.error("all SellingPlan call failed:", error);
      throw error;
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(totalIncome.fulfilled, (state, action) => {
      //   state.totalIncome = action.payload;
      //   state.loading = 'succeeded';
      //   state.error = null;
      // })
      .addCase(totalIncomeAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(totalIncomeAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
      })      
      // .addCase(totalBalance.fulfilled, (state, action) => {
      //   state.totalBalance = action.payload.data; 
      //   state.loading = "succeeded";
      //   state.error = null;
      // })
      .addCase(totalBalanceAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(totalBalanceAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(transitionHistoryAsync.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.transitionHistory = action.payload;
          state.loading = "succeeded";
          state.error = null;
        }
      })
      .addCase(transitionHistoryAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(transitionHistoryAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default dashboardSlice.reducer;
