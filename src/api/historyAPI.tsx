import axios from "axios";

const giftAPI = "https://gift-acb-be.onrender.com/api";

export const populateHistory = async (_id: string) => {
  try {
    return await axios
      .get(`${giftAPI}/${_id}/populate-history`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};
