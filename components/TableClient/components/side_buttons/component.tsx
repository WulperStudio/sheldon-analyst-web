import React from "react";

import { WrapperButons } from "./styled";
import { ButtonGeneralComponent } from "../button_general";

import * as Icon3 from "@assets/icon-3.svg";

const SideButtons: React.FunctionComponent<{}> = () => {
  return (
    <WrapperButons>
      <ButtonGeneralComponent icon={Icon3}>Tracsa</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>
        Search countries
      </ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>
        Search sectors
      </ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Search area</ButtonGeneralComponent>
      <ButtonGeneralComponent icon={Icon3}>Search tags</ButtonGeneralComponent>
      <ButtonGeneralComponent width={175} icon={Icon3}>
        Search status
      </ButtonGeneralComponent>
      <ButtonGeneralComponent width={115} icon={Icon3}>
        Size
      </ButtonGeneralComponent>
      <ButtonGeneralComponent
        center={true}
        width={71}
        icon={Icon3}
      ></ButtonGeneralComponent>
      <ButtonGeneralComponent width={143} icon={Icon3}>
        Tracsa
      </ButtonGeneralComponent>
    </WrapperButons>
  );
};

export default SideButtons;
