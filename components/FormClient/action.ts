import {
  SUBMIT_OPEN_GRAPH,
  SUCCESS_OPEN_GRAPH,
  FAIL_OPEN_GRAPH,
  ActionFormClient,
  OpenGraphModel,
} from "./type";

import { getSession } from "../Login/storage";
import { OpenGraph } from "./service";

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
