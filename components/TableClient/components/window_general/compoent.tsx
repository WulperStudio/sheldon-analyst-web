import React from "react";

import { WindowGeneralPurpose } from "../../styled";

interface Props {
  size: number;
  checked?: boolean;
  text?: string;
}

const WindowGeneral: React.FunctionComponent<{}> = (props) => {
  return (
    <WindowGeneralPurpose className="general-window">
      {props.children}
    </WindowGeneralPurpose>
  );
};

export default WindowGeneral;
