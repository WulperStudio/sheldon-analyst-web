import React from "react";

import { PictureGeneral, TitleSubTitle } from "../";

interface Props {
  src: string;
  alt?: string;
  toolTitle?: string;
  textCenter?: boolean;
  title: string;
  colorSubTitle?: string;
  link?: string;
  subTitle: string;
}

const SimpleProfile: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <PictureGeneral src={props.src} alt={props.alt} toolTitle={props.title} />
      <TitleSubTitle
        textCenter={props.textCenter}
        title={props.title}
        colorSubTitle={props.colorSubTitle}
        link={props.link}
        subTitle={props.subTitle}
      />
    </>
  );
};

export default SimpleProfile;
