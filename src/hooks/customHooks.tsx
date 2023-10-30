import useSWR from "swr";
import { oneUserAPI } from "../api/authAPI";
import {
  populateGiftAPI,
  viewAllGiftAPI,
  viewOneGiftAPI,
} from "../api/giftAPI";
import { populateHistory } from "../api/historyAPI";

export const useOneGiftUser = (_id: string) => {
  const { data, isLoading } = useSWR(`/${_id}/one`, () => oneUserAPI(_id));

  return { data, isLoading };
};

export const usePopulateGift = (_id: string) => {
  const { data, isLoading } = useSWR(`/${_id}/populate`, () =>
    populateGiftAPI(_id)
  );

  return { data, isLoading };
};

export const useAllGift = () => {
  const { data, isLoading } = useSWR(`/all-gift`, viewAllGiftAPI);
  return { data, isLoading };
};

export const useOneGift = (giftID: any) => {
  const { data: one, isLoading } = useSWR(`/${giftID}/one-gift`, () =>
    viewOneGiftAPI(giftID)
  );

  return { one, isLoading };
};

export const usePopulateHistory = (_id: string) => {
  const { data: populate, isLoading } = useSWR(`/${_id}/populate-history`, () =>
    populateHistory(_id)
  );
  return { populate, isLoading };
};
