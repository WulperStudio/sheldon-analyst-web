import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "antd";
import Link from "next/link";

import { LayoutGeneric } from "../layout";

import {
  Login,
  logoutSession,
  RxStatusLoginSession,
  SuccessSession,
  isActiveSession,
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
      <h1>Welcome to Sheldon Analyst</h1>
      <br />
      <br />
      {props.token == null ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <h1>
            Hi, dear <span className="name-client">{props.nickname}</span>
          </h1>
          <Button onClick={() => props.Logout(props.token || "")}>
            LogOut
          </Button>
          <br />
          <div style={{ display: "flex" }}>
            <Link href="/form_media">
              <a>Form Media</a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/form_client">
              <a>Form Client</a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/table_form">
              <a>Table Form</a>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/upload_csv">
              <a>Upload CSV</a>
            </Link>
          </div>
        </>
      )}
    </LayoutGeneric>
  );
};

export default connector(Home);
