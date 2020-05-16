import React from "react";

import { WrapperButons } from "./styled";
import { ButtonGeneralComponent } from "../button_general";

import * as Icon3 from "@assets/icon-3.svg";

const SideButtons: React.FunctionComponent<{}> = () => {
  return (
    <WrapperButons>
      <ButtonGeneralComponent color="#343536" icon={Icon3} active={true}>
        Name
      </ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Country</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Sectors</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Tags</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Size</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Area</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Status</ButtonGeneralComponent>
      <ButtonGeneralComponent
        center={true}
        width={37}
        icon={Icon3}
      ></ButtonGeneralComponent>
    </WrapperButons>
  );
};

export default SideButtons;
