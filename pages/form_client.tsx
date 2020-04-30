import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Router from "next/router";

import LayoutGeneric from "../layout/generic";
import {
  FormClient,
  RxStatusLoginSession,
  SuccessSession,
} from "../components";

const mapState = (state: RxStatusLoginSession): SuccessSession => {
  return {
    ...state.LoginReducer,
  };
};

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector>;

const Home: React.FunctionComponent<Props> = (props) => {
  // persistence session
  React.useEffect(() => {
    if (!props.token) {
      Router.push("/");
    }
  }, []);

  return (
    <LayoutGeneric>
      <FormClient />
    </LayoutGeneric>
  );
};

export default connector(Home);
