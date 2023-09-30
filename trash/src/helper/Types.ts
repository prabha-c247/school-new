interface School {
  id: number;
  schoolLogo: string; // URL or file path to the logo image
  schoolName: string;
  affiliation: string;
  schoolMobileNumber: string;
  principalName: string;
  schoolType: string;
  identificationNumber: string;
  schoolMailId: string;
  principalContactEmail: string;
  schoolAddress: string;
  schoolCity: string;
  schoolPinCode: string;
  userName: string;
  createPassword: string;
  confirmPassword: string;
  termsCondition: boolean;
}
export type { School };

export type EditSchoolTypes = {
  schoolLogo: string;
  schoolName: string;
  affiliation: string;
  schoolMobileNumber: string;
  principalName: string;
  schoolType: string;
  identificationNumber: string;
  schoolMailId: string;
  principalContactEmail: string;
  schoolAddress: string;
  schoolCity: string;
  schoolPinCode: string;
};

export type Plan = {
  planName: string;
  planNo: string;
  planCreationDate: string;
  currentMode: string;
  planUsageLimit: string;
  features: string;
  trialPeriodLimit: string;
  billingCycle: string;
  codes: string;
  visibility: string;
  description: string;
  paymentOption: string;
};

export type login = {
  email: string;
  password: string;
};

// export type setting = {
//   name: string;
//   contactInfo: string;
//   img:string;
// }
