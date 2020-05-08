import React from "react";

import { WindowGeneralPurpose } from "../../styled";

interface Props {
  width?: number;
  light?: boolean;
}

const WindowGeneral: React.FunctionComponent<Props> = (props) => {
  return (
    <WindowGeneralPurpose
      light={props.light}
      width={props.width}
      className="general-window"
    >
      {props.children}
    </WindowGeneralPurpose>
  );
};

export default WindowGeneral;
