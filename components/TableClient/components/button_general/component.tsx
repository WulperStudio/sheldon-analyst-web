import React from "react";

import { ButtonGeneral } from "./styled";

interface Props {
  icon?: string;
  width?: number;
  center?: boolean;
  color?: string;
}

const ButtonGeneralComponent: React.FunctionComponent<Props> = (props) => {
  return (
    <ButtonGeneral
      width={props.width}
      center={props.center}
      color={props.color}
    >
      {props.icon ? <img src={props.icon} /> : null}
      {props.children}
    </ButtonGeneral>
  );
};

export default ButtonGeneralComponent;
