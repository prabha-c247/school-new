import axios from "axios";
import { login,School } from "../helper/Types";
const base_url = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

// const apiUrl = `${REACT_APP_BASE_URL}/login`;

export const LoginUser = (url: string, credentials: login) => {
  return axios.post(url, credentials);
};

export const getSettingPersonalDetails = (url: string) => {
  return axios.get(url);
};

export const TotalIncome = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const TotalBalance = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const CourseTransitionHistory = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const MostSellingPlan = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const OverallSellingPlan = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetAllSchools = async (url: string, headers?: Record<string, string>) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AddSchool = async (url: string, schoolData: Partial<School>, headers?: Record<string, string>) => {
  try {
    const response = await axios.post(url, schoolData, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const EditSchool = async (url: string, schoolData: Partial<School>, headers?: Record<string, string>) => {
  try {
    const response = await axios.put(url, schoolData, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const headers = {
  'Authorization': `Bearer ${token.substring(1, token.length - 1)}`,
  'Content-Type': 'application/json',
};

// Example usage:
const schools = await GetAllSchools('https://your-api-url.com/schools', headers);




