import React from "react";

import { WrapperLogoAside, WrapperBtnSections, BtnItemSide } from "./styled";

import * as Logo from "@assets/rick.jpg";
import * as Icon1 from "@assets/icon-1.svg";
import * as Icon2 from "@assets/icon-2.svg";

const SideBarButtons: React.FunctionComponent<{}> = () => {
  return (
    <>
      <WrapperLogoAside>
        <img src={Logo} alt="Logo" />
      </WrapperLogoAside>
      <WrapperBtnSections>
        <BtnItemSide active={true} margin="80px 0 0 0">
          <img src={Icon1} alt="" />
        </BtnItemSide>
        <BtnItemSide>
          <img src={Icon2} alt="" />
        </BtnItemSide>
        <BtnItemSide>
          <img src={Icon2} alt="" />
        </BtnItemSide>
        <BtnItemSide>
          <img src={Icon2} alt="" />
        </BtnItemSide>
      </WrapperBtnSections>
    </>
  );
};

export default SideBarButtons;
