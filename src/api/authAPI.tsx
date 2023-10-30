import axios from "axios";

const apiURL: string = "https://gift-acb-be.onrender.com/api";

export const registerAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const enterOTPAPI = async (token: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${token}/first-process`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyAPI = async (token: string) => {
  try {
    return await axios.get(`${apiURL}/${token}/verified`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const loginAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const oneUserAPI = async (_id: string) => {
  try {
    return await axios.get(`${apiURL}/${_id}/one`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
