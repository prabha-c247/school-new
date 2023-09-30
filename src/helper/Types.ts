interface School {
  _id?: number | null;
  schoolLogo: string; // URL or file path to the logo image
  schoolName: string;
  schoolAffiliation: string;
  contactInformation: number;
  principalName: string;
  schoolType: string;
  schoolIdentificationNumber: string;
  schoolEmail: string;
  principalContactInformation: string;
  address: string;
  schoolCity: string;
  schoolPinCode: string;  
  createPassword: string;
  confirmPassword: string;
  termsAndConditions: boolean;
  discountCouponCode:string;
  planSelection: string;
  username: string;
  schoolWebsite:string;
}
export type { School };

export type EditSchoolTypes = {
  _id?: number | null;
  schoolLogo: string; // URL or file path to the logo image
  schoolName: string;
  schoolAffiliation: string;
  contactInformation: number;
  principalName: string;
  schoolType: string;
  schoolIdentificationNumber: string;
  schoolEmail: string;
  principalContactInformation: string;
  address: string;
  schoolCity: string;
  schoolPinCode: string;
  username: string;
  createPassword: string;
  confirmPassword: string;
  termsAndConditions: boolean;
  planSelection:string;
  schoolWebsite:string;
};

export type PlanSelectionType={
    _id: string;
    planName: string;
    pricing: number;  
}

export type Plan = {
  _id?: number | null;
  planName: string;
  planNumber: string;
  createdAt: string;
  planExpiration:string;  
  usageLimit: string;
  features: string;
  trialPeriod: string;
  billingCycle: string;
  codes: string;
  planVisibility: string;
  planDescription: string;
  paymentOption: string; 
  planActivation: string;
  pricing:string;
  paymentGateway:string;
  discountCouponCode:string;
  duration:string;
  planAnalytics:string;  
};

export type login = {
  email: string;
  password: string;
};

export type setting = {
  name: string;
  contactInfo: string;
  img:string;
}
export type changePassword = {
  password: string;
  newPassword: string;
  confirmPassword:string;
}

export type TransitionHistoryType = {
  schoolLogo:string;
  schoolName:string;
  planName:string;
  planPricing:string; 
  date:string; 
}

export type MostSellingPlanType = {
  totalPurchase:number;
  totalAmount:number;
  planName:string;  
}
export type OverallSellingPlanType = {
  _id:string;
  totalPurchase:number;
  totalAmount:number;  
}
export type TotalBalanceType={
  message:string;
  data:number;}

export type TotalIncomeType={
  message:string;
  weeklyIncome:[{
    day:string;
    income:number;
  }];
  todaysIncome:number;
  totalIncome:number;
}