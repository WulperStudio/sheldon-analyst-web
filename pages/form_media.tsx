import React from "react";
// import { connect, ConnectedProps } from "react-redux";

import { LayoutGeneric } from "../layout";
import { FormMedia } from "../components";

// const mapState = (state: RxStatusLoginSession): SuccessSession => {
//   return {
//     ...state.LoginReducer,
//   };
// };

// const connector = connect(mapState);

// type Props = ConnectedProps<typeof connector>;

const FormClientPage: React.FunctionComponent<{}> = () => {
  return (
    <LayoutGeneric>
      <FormMedia />
    </LayoutGeneric>
  );
};

// export default connector(FormClientPage);

export default FormClientPage;
