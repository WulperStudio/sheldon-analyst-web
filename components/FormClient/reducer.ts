import {
  SUBMIT_OPEN_GRAPH,
  SUCCESS_OPEN_GRAPH,
  FAIL_OPEN_GRAPH,
  LOAD_CODE_NUMBERS,
  SUBMIT_FIND_COUNTRY,
  LOAD_FIND_COUNTRY,
  SUBMIT_GENERAL_INFO,
  LOAD_GENERAL_INFO,
  StatusFormClient,
  ActionFormClient,
  SUBMIT_FORM,
  SUCCESS_FORM,
  FAIL_FORM,
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
  codeNum: [],
  country: {
    list: [],
    selected: undefined,
    find: "",
    isLoading: false,
  },
  genCInfo: {
    potentialSize: [],
    interests: [],
    companySector: [],
    companyArea: [],
    companyPosition: [],
    companyProducts: [],
    nse: [],
    isLoading: false,
  },
  form: {
    decisionMaker: [],
    principalDecisionMaker: {
      cellPhone: "",
      companyEmail: "",
    },
    isLoading: false,
    done: false,
    fail: false,
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
    case LOAD_CODE_NUMBERS:
      return { ...state, codeNum: action.payload };
    case SUBMIT_FIND_COUNTRY:
      return { ...state, country: { ...state.country, isLoading: true } };
    case LOAD_FIND_COUNTRY:
      return {
        ...state,
        country: { ...state.country, list: action.payload, isLoading: false },
      };
    case SUBMIT_GENERAL_INFO:
      return { ...state, genCInfo: { ...state.genCInfo, isLoading: true } };
    case LOAD_GENERAL_INFO:
      return {
        ...state,
        genCInfo: {
          ...state.genCInfo,
          ...action.payload,
          isLoading: false,
        },
      };
    case SUBMIT_FORM:
      return {
        ...state,
        form: { ...action.payload, isLoading: true, done: false, fail: false },
      };
    case SUCCESS_FORM:
      return {
        ...state,
        form: { ...state.form, isLoading: false, done: true },
      };
    case FAIL_FORM:
      return {
        ...state,
        form: { ...state.form, isLoading: false, fail: true },
      };
    default:
      return state;
  }
};
