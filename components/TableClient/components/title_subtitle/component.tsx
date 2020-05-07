import React from "react";

import {
  WrapperTitleSubTitle,
  TitleGeneralInto,
  SubTitleGeneralInto,
} from "../../styled";

interface Props {
  textCenter?: boolean;
  title: string;
  color?: string;
  colorSubTitle?: string;
  link?: string;
  subTitle: string;
}

const TitleSubTitle: React.FunctionComponent<Props> = (props) => {
  return (
    <WrapperTitleSubTitle center={props.textCenter}>
      <TitleGeneralInto color={props.color}>{props.title}</TitleGeneralInto>
      <SubTitleGeneralInto color={props.colorSubTitle}>
        {props.link ? (
          <a href={props.link}>{props.subTitle}</a>
        ) : (
          props.subTitle
        )}
      </SubTitleGeneralInto>
    </WrapperTitleSubTitle>
  );
};

export default TitleSubTitle;
