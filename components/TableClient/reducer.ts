import {
  LOADING_CLIENTS_DATA,
  SUCCESS_CLIENTS_DATA,
  FAIL_CLIENTS_DATA,
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
    default:
      return state;
  }
};
