import { combineReducers } from "redux";
import { LoginReducer } from "../components/Login";
import { AccountReducer } from "../components/Account";
import { FormClientReducer } from "../components/FormClient";

const rootReducer = combineReducers({
  LoginReducer,
  AccountReducer,
  FormClientReducer,
});

export default rootReducer;
