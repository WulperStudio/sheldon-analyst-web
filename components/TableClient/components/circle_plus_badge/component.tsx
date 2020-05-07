import React from "react";
import { v4 as uid } from "uuid";

import {
  TimeLineItems,
  WrapperTimeLineItem,
  TimeLineItemBag,
  SuperBadgeItem,
} from "../../styled";

interface Item {
  text: string;
  background: string;
  color: string;
  isBadge?: boolean;
  colorBadge?: string;
}

interface Props {
  items: Array<Item>;
}

const CirclePlusBadge: React.FunctionComponent<Props> = (props) => {
  return (
    <TimeLineItems>
      {props.items.map((item) => (
        <WrapperTimeLineItem key={uid()}>
          {item.isBadge ? <TimeLineItemBag color={item.colorBadge} /> : null}
          <SuperBadgeItem background={item.background} color={item.color}>
            {item.text}
          </SuperBadgeItem>
        </WrapperTimeLineItem>
      ))}
    </TimeLineItems>
  );
};

export default CirclePlusBadge;
