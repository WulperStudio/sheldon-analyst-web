import {
  SUBMIT_FORM_LOGIN,
  SUCCESS_SESSION,
  FAIL_SESSION,
  LOGOUT_SESSION,
  ActionLoginSession,
  StatusLoginSession,
} from "./type";

export const initialState = (): StatusLoginSession => ({
  loginEmail: "admin@imsheldon.com",
  loginPassword: "eba259b8-83f4-11ea-bd99-0242ac13000e",
  id: "",
  fullName: "",
  nickname: "",
  email: "",
  privileges: 0,
  section: [],
  token: null,
  updated: "",
  created: "",
  loading: false,
  fail: false,
});

const LoginReducer = (
  state: StatusLoginSession = initialState(),
  action: ActionLoginSession
): StatusLoginSession => {
  switch (action.type) {
    case SUBMIT_FORM_LOGIN:
      return { ...state, loading: action.loading };
    case SUCCESS_SESSION:
      return {
        ...state,
        ...action.payload,
        loading: action.loading,
        loginEmail: "",
        loginPassword: "",
      };
    case FAIL_SESSION:
      return { ...state, ...action.payload, loading: action.loading };
    case LOGOUT_SESSION:
      return { ...initialState() };
    default:
      return state;
  }
};

export default LoginReducer;
