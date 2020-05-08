import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { LayoutGeneric } from "../layout";
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

const FormClientPage: React.FunctionComponent<Props> = () => {
  return (
    <LayoutGeneric>
      <FormClient />
    </LayoutGeneric>
  );
};

export default connector(FormClientPage);
