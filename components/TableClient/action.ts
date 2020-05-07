import {
  LOADING_CLIENTS_DATA,
  SUCCESS_CLIENTS_DATA,
  FAIL_CLIENTS_DATA,
  Filters,
  ActionDataClient,
  ClientDataModel,
} from "./type";
import { getDataClientsService } from "./service";
import { getSession } from "../Login/storage";

export type dispatchModel = (_: ActionDataClient) => void;

export const GetClientsData = (filters: Filters) => {
  return (dispatch: dispatchModel) => {
    const token = getSession();
    if (typeof token === "string") {
      getDataClientsService(token, filters)
        .then((data) => {
          dispatch(successGetData(data));
        })
        .catch(() => {
          dispatch(failGetData());
        });
      dispatch(loadingGetData(filters));
    }
  };
};

const loadingGetData = (filters: Filters): ActionDataClient => ({
  type: LOADING_CLIENTS_DATA,
  payload: filters,
});

const successGetData = (data: ClientDataModel): ActionDataClient => ({
  type: SUCCESS_CLIENTS_DATA,
  payload: data,
});

const failGetData = (): ActionDataClient => ({
  type: FAIL_CLIENTS_DATA,
});
