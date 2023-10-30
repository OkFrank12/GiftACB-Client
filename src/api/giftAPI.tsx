import axios from "axios";

const giftAPI = "https://gift-acb-be.onrender.com/api";

export const createGiftAPI = async (_id: string, data: any) => {
  try {
    // const config: any = {
    //   "content-type": "multipart/form-data",
    // };
    return await axios
      .post(`${giftAPI}/${_id}/create-gift`, data)
      .then((res: any) => {
        console.log(res.data.data);
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const populateGiftAPI = async (_id: string) => {
  try {
    return await axios.get(`${giftAPI}/${_id}/populate`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewAllGiftAPI = async () => {
  try {
    return await axios.get(`${giftAPI}/all-gift`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const buyGiftAPI = async (_id: string, giftID: string, data: any) => {
  try {
    return await axios
      .post(`${giftAPI}/${_id}/${giftID}/buy-gift`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewOneGiftAPI = async (giftID: string) => {
  try {
    return await axios.get(`${giftAPI}/${giftID}/one-gift`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
