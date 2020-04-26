import React from "react";

import LayoutGeneric from "../../layout/generic";
import { Validate } from "../../components";

const ValidatePage: React.FunctionComponent<{}> = () => {
  return (
    <LayoutGeneric>
      <Validate />
    </LayoutGeneric>
  );
};

export default ValidatePage;
