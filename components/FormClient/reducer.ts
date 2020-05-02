import {
  SUBMIT_OPEN_GRAPH,
  SUCCESS_OPEN_GRAPH,
  FAIL_OPEN_GRAPH,
  StatusFormClient,
  ActionFormClient,
} from "./type";

export const initialState = (): StatusFormClient => ({
  opg: {
    image: undefined,
    title: undefined,
    desc: undefined,
    url: "",
    isLoading: false,
    nodata: true,
  },
});

export const FormClientReducer = (
  state: StatusFormClient = initialState(),
  action: ActionFormClient
): StatusFormClient => {
  switch (action.type) {
    case SUBMIT_OPEN_GRAPH:
      return { ...state, opg: { ...state.opg, isLoading: true } };
    case SUCCESS_OPEN_GRAPH:
      return { ...state, opg: { ...action.payload } };
    case FAIL_OPEN_GRAPH:
      return {
        ...state,
        opg: { ...state.opg, isLoading: false, nodata: true },
      };
    default:
      return state;
  }
};
