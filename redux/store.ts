import { combineReducers } from "redux";
import { LoginReducer } from "../components/Login";
import { AccountReducer } from "../components/Account";
import { FormClientReducer } from "../components/FormClient";
import { ClientDataReducer } from "../components/TableClient";

const rootReducer = combineReducers({
  LoginReducer,
  AccountReducer,
  FormClientReducer,
  ClientDataReducer,
});

export default rootReducer;
