import React from "react";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  TitleFormGeneral,
  Content,
} from "../../../components/FormClient/section/styled";

import MediaInfo from "./media_info";
import MediaFormats from "./media_formats";
import AudienceReach from "./audience_reach";
import Segmentation from "./segmentation";
import AdvanceStatistics from "./advance_statistics";
import DecisionMaker from "./decision_maker";

// interface PropsMapState {
// }

// const mapState = (state: RxStatusFormClient): PropsMapState => {
//   return {
//   };
// };

// const mapDispatch = (dispatch: Function) => {
//   return {
//   };
// };

// const connector = connect(mapState, mapDispatch);

// type Props = ConnectedProps<typeof connector>;

const removeDecision = (
  decision: Array<number>,
  value: number
): Array<number> => {
  const aux = [...decision];
  const index = aux.indexOf(value);
  if (index > -1) {
    aux.splice(index, 1);
  }
  return aux;
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormClient: React.FunctionComponent<{}> = () => {
  const [decision, setDecision] = React.useState<Array<number>>([]);
  const [mediaFormats, setMediaFormats] = React.useState<Array<number>>([]);

  return (
    <>
      <TitleFormGeneral>Media Form</TitleFormGeneral>
      <Form
        className="form-clients"
        style={{ width: "100%" }}
        // onFinish={(form) => {
        //   props.loadFormClientAct(form as FormClientModel, props.opgPicture);
        // }}
        validateMessages={validateMessages}
        initialValues={{ codPhoneOpc: "1" }}
      >
        <Content>
          <MediaInfo />
          <MediaFormats
            onClosing={() => null}
            groupName="principalMediaFormat"
            isClosing={false}
            reference={1}
          />
          {mediaFormats.map((item, index) => (
            <MediaFormats
              key={item}
              groupName={`mediaFormat_${index + 1}`}
              onClosing={() =>
                setMediaFormats(removeDecision(mediaFormats, item))
              }
              isClosing={true}
              reference={index + 2}
            />
          ))}
          <Button
            type="primary"
            onClick={() =>
              setMediaFormats([
                ...mediaFormats,
                (mediaFormats[mediaFormats.length - 1] || 0) + 1,
              ])
            }
          >
            <PlusOutlined />
            Add Media Format
          </Button>
          <AudienceReach />
          <Segmentation />
          <AdvanceStatistics />
          <DecisionMaker
            onClosing={() => null}
            groupName="principalDecisionMaker"
            isClosing={false}
            reference={1}
          />
          {decision.map((item, index) => (
            <DecisionMaker
              key={item}
              reference={index + 2}
              isClosing={true}
              groupName={`decisionMarket_${index + 1}`}
              onClosing={() => setDecision(removeDecision(decision, item))}
            />
          ))}
          <Button
            type="primary"
            onClick={() =>
              setDecision([
                ...decision,
                (decision[decision.length - 1] || 0) + 1,
              ])
            }
          >
            <PlusOutlined />
            Add Decision Maker
          </Button>
        </Content>
      </Form>
    </>
  );
};

// export default connector(FormClient);

export default FormClient;
