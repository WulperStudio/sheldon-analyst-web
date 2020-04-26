import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "antd";

import LayoutGeneric, { ContextNavTags } from "../layout/generic";

import {
  Login,
  logoutSession,
  RxStatusLoginSession,
  SuccessSession,
  isActiveSession,
  Register,
  Recover,
} from "../components";

const mapDispatch = (dispatch: Function) => {
  return {
    Logout: (token: string) => {
      dispatch(logoutSession(token));
    },
    isActive: () => {
      dispatch(isActiveSession());
    },
  };
};

const mapState = (state: RxStatusLoginSession): SuccessSession => {
  return {
    ...state.LoginReducer,
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Home: React.FunctionComponent<Props> = (props) => {
  // persistence session
  React.useEffect(() => {
    props.isActive();
  }, []);

  return (
    <LayoutGeneric>
      {props.token == null ? (
        <>
          <h1>Welcome to Sheldon Company.!</h1>
          <br />
          <br />
          <ShowAccountComponent />
        </>
      ) : (
        <>
          <h1>
            Hi, dear <span className="name-client">{props.name}</span>
          </h1>
          <Button onClick={() => props.Logout(props.token || "")}>
            LogOut
          </Button>
        </>
      )}
    </LayoutGeneric>
  );
};

const ShowAccountComponent: React.FunctionComponent<{}> = () => {
  const context = React.useContext(ContextNavTags);
  return (
    <>
      {context !== undefined ? (
        context === "login" ? (
          <Login />
        ) : context === "register" ? (
          <Register />
        ) : context === "recover" ? (
          <Recover />
        ) : null
      ) : null}
    </>
  );
};

export default connector(Home);
