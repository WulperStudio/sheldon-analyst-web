import {
  LOADING_CLIENTS_DATA,
  SUCCESS_CLIENTS_DATA,
  FAIL_CLIENTS_DATA,
  SUBMIT_GET_FILTERS,
  SUCCESS_GET_FILTERS,
  FAIL_GET_FILTERS,
  Filters,
  GeneralFiltersModel,
  ActionDataClient,
  ClientDataModel,
} from "./type";
import { getDataClientsService, getFiltersService } from "./service";
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

/**
 * Data Filters
 */

export const GetFilters = () => {
  return (dispatch: dispatchModel) => {
    dispatch(submitGetFilters());
    const token = getSession();
    if (typeof token === "string") {
      getFiltersService(token)
        .then((data) => {
          dispatch(successGetFilters(data));
        })
        .catch(() => {
          dispatch(failGetFilters());
        });
    }
  };
};

const submitGetFilters = (): ActionDataClient => ({
  type: SUBMIT_GET_FILTERS,
});

const successGetFilters = (data: GeneralFiltersModel): ActionDataClient => ({
  type: SUCCESS_GET_FILTERS,
  payload: data,
});

const failGetFilters = (): ActionDataClient => ({
  type: FAIL_GET_FILTERS,
});
