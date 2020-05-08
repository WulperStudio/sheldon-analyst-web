import React from "react";

import { ButtonGeneral } from "./styled";

interface Props {
  icon?: string;
  width?: number;
  center?: boolean;
}

const ButtonGeneralComponent: React.FunctionComponent<Props> = (props) => {
  return (
    <ButtonGeneral width={props.width} center={props.center} >
      {props.icon ? <img src={props.icon} /> : null}
      {props.children}
    </ButtonGeneral>
  );
};

export default ButtonGeneralComponent;
