import axios from "axios";
import { login,School,Plan,changePassword } from "../helper/Types";
const apiUrl = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

const headers = {
  'Authorization': token ? `Bearer ${token.substring(1, token.length - 1)}` : '',
  'Content-Type': 'application/json',
};

//schools
export const AddSchool = (schoolData: Partial<School>) => {
  return axios.post(`${apiUrl}/school`, schoolData, { headers });
};

export const EditSchool = (id: number, schoolData: Partial<School>) => {  
  return axios.put(`${apiUrl}/school/${id}`, schoolData, { headers });  
};

export const GetAllSchools = () => {
  return axios.get(`${apiUrl}/school/school-list`, { headers });
};

export const ViewSingleSchool = (id: number) => { 
  return axios.get(`${apiUrl}/school/${id}`, { headers });
};

export const planSelection = () => {
  return axios.get(`${apiUrl}/plan-selection`, { headers });
};


//Plans
export const CreatePlan = (planData: Partial<Plan>) => {
  return axios.post(`${apiUrl}/create-plan`, planData, { headers });
};

export const ViewPlan = (id: number, planData: Partial<Plan>) => {  
  return axios.get(`${apiUrl}/plan-history/${id}`, { headers }); 
};

export const GetAllPlans = () => {
  return axios.get(`${apiUrl}/plan-history`, { headers });
};

//setting
export const getSettingPersonalDetails = () => {
  return axios.get(`${apiUrl}/setting/650be9dcbcd7e6112977d65e`, { headers });
};

export const passwordSecurity =(passwordField: Partial<changePassword>)=> {
  return axios.put(`${apiUrl}/setting/change-password`,passwordField, { headers });
}
// login
export const LoginUser = (url: string, credentials: login) => {
  return axios.post(url, credentials);
};
//dashboard
export const totalIncomeFetch = () => {
  axios.get(`${apiUrl}/total-income`, { headers })    
};
export const TotalBalance = () => {
    axios.get(`${apiUrl}/total-balance`, { headers })    
  };
export const CourseTransitionHistory = () => {
  axios.get(`${apiUrl}/transition-history`, { headers })    
};
export const MostSellingPlan = () => {
  axios.get(`${apiUrl}/most-selling-plans`, { headers })  
};
export const OverallSellingPlan = () => {
  axios.get(`${apiUrl}/overall-selling-plans`, { headers})
};




