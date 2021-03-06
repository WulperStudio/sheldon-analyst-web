import React from "react";

import { PictureGeneralProfile } from "../../styled";

interface Props {
  src: string;
  alt?: string;
  toolTitle?: string;
  size?: "small" | "medium";
}

const PictureGeneral: React.FunctionComponent<Props> = (props) => {
  return (
    <PictureGeneralProfile size={props.size}>
      <img src={props.src} alt={props.alt} title={props.toolTitle} />
    </PictureGeneralProfile>
  );
};

export default PictureGeneral;
