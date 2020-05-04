import {
  SUBMIT_OPEN_GRAPH,
  SUCCESS_OPEN_GRAPH,
  FAIL_OPEN_GRAPH,
  LOAD_CODE_NUMBERS,
  SUBMIT_FIND_COUNTRY,
  LOAD_FIND_COUNTRY,
  SUBMIT_GENERAL_INFO,
  LOAD_GENERAL_INFO,
  ActionFormClient,
  OpenGraphModel,
  CodeNumberModel,
  CountryModel,
  GeneralCInfoModel,
} from "./type";

import { getSession } from "../Login/storage";
import {
  OpenGraph,
  loadCodeNumService,
  loadCountryService,
  loadGenCInfoService,
} from "./service";

export type dispatchRegister = (_: ActionFormClient) => void;

/**
 * Open Graph
 * @param url
 */

export const submitOpenGraph = (url: string) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitOpG());
    const token = getSession();
    if (typeof token === "string") {
      OpenGraph(url, token)
        .then((data) => {
          dispatch(successOpG(data));
        })
        .catch(() => {
          dispatch(failOpG());
        });
    } else {
      dispatch(failOpG());
    }
  };
};

const submitOpG = (): ActionFormClient => ({
  type: SUBMIT_OPEN_GRAPH,
});

const successOpG = (data: OpenGraphModel): ActionFormClient => ({
  type: SUCCESS_OPEN_GRAPH,
  payload: data,
});

const failOpG = (): ActionFormClient => ({
  type: FAIL_OPEN_GRAPH,
});

export const loadCodeNum = () => {
  return (dispatch: dispatchRegister) => {
    const token = getSession();
    if (typeof token === "string") {
      loadCodeNumService(token).then((data) => {
        dispatch(loadCodeNumOk(data));
      });
    }
  };
};

const loadCodeNumOk = (data: Array<CodeNumberModel>): ActionFormClient => ({
  type: LOAD_CODE_NUMBERS,
  payload: data,
});

export const loadCountry = (find: string) => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitCountryFind());
    const token = getSession();
    if (typeof token === "string" && find.length >= 3) {
      loadCountryService(find, token).then((data) => {
        dispatch(loadCountryFind(data));
      });
    }
  };
};

const submitCountryFind = (): ActionFormClient => ({
  type: SUBMIT_FIND_COUNTRY,
});

const loadCountryFind = (data: Array<CountryModel>): ActionFormClient => ({
  type: LOAD_FIND_COUNTRY,
  payload: data,
});

export const loadGenCInfo = () => {
  return (dispatch: dispatchRegister) => {
    dispatch(submitGenCInfo());
    const token = getSession();
    if (typeof token === "string") {
      loadGenCInfoService(token).then((data) => {
        dispatch(loadGenCInfoOk(data));
      });
    }
  };
};

const submitGenCInfo = (): ActionFormClient => ({
  type: SUBMIT_GENERAL_INFO,
});

const loadGenCInfoOk = (data: GeneralCInfoModel): ActionFormClient => ({
  type: LOAD_GENERAL_INFO,
  payload: data,
});
