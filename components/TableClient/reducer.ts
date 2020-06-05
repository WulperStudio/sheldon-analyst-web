import {
  LOADING_CLIENTS_DATA,
  SUCCESS_CLIENTS_DATA,
  FAIL_CLIENTS_DATA,
  SUBMIT_GET_FILTERS,
  SUCCESS_GET_FILTERS,
  FAIL_GET_FILTERS,
  StatusDataClient,
  ActionDataClient,
} from "./type";

export const initialState = (): StatusDataClient => ({
  clientData: {
    filters: {},
    data: {
      clients: [],
      total: 0,
      pages: 0,
    },
    isLoading: false,
    done: false,
    fail: false,
  },
  genealFilters: {
    potentialSize: [],
    interests: [],
    companySector: [],
    companyArea: [],
    companyPosition: [],
    companyProducts: [],
    nse: [],
    isLoading: false,
  },
});

export const ClientDataReducer = (
  state: StatusDataClient = initialState(),
  action: ActionDataClient
): StatusDataClient => {
  switch (action.type) {
    case LOADING_CLIENTS_DATA:
      return {
        ...state,
        clientData: {
          filters: action.payload,
          data: { ...initialState().clientData.data },
          isLoading: true,
          done: false,
          fail: false,
        },
      };
    case SUCCESS_CLIENTS_DATA:
      return {
        ...state,
        clientData: {
          ...state.clientData,
          data: action.payload,
          isLoading: false,
          done: true,
          fail: false,
        },
      };
    case FAIL_CLIENTS_DATA:
      return {
        ...state,
        clientData: {
          ...state.clientData,
          data: { ...initialState().clientData.data },
          isLoading: false,
          done: false,
          fail: true,
        },
      };
    case SUBMIT_GET_FILTERS:
      return {
        ...state,
        genealFilters: {
          ...state.genealFilters,
          isLoading: true,
        },
      };
    case SUCCESS_GET_FILTERS:
      return {
        ...state,
        genealFilters: {
          ...action.payload,
          isLoading: false,
        }
      };
    case FAIL_GET_FILTERS:
      return {
        ...state,
        genealFilters: {
          ...state.genealFilters,
          isLoading: false,
        }
      };
    default:
      return state;
  }
};
