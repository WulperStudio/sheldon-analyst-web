import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Store } from "rc-field-form/lib/interface";

import { RxStatusFormClient, FormClientModel } from "../type";
import { loadCodeNum, loadFormClient } from "../action";

import { TitleFormGeneral, Content } from "./styled";

import StatusForm from "./status_form";
import CompanyInfo from "./company_info";
import DecisionMaker from "./decision_maker";
import Segmentation from "./segmentation";
import History from "./history";

interface PropsMapState {
  form: FormClientModel;
  opgPicture?: string;
}

const mapState = (state: RxStatusFormClient): PropsMapState => {
  return {
    form: state.FormClientReducer.form,
    opgPicture: state.FormClientReducer.opg.image,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    loadCodeNumAct: () => {
      dispatch(loadCodeNum());
    },
    loadFormClientAct: (form: Store, opgPicture?: string) => {
      form.decisionMaker = Object.keys(form)
        .filter((item) => {
          if (item.indexOf("decisionMarket_") > -1) {
            return item;
          }
          return false;
        })
        .map((item) => form[item]);
      form.picture = opgPicture;
      dispatch(loadFormClient(form as FormClientModel));
    },
  };
};

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

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

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

const FormClient: React.FunctionComponent<Props> = (props) => {
  const [decision, setDecision] = React.useState<Array<number>>([]);
  React.useEffect(() => {
    props.loadCodeNumAct();
  }, []);
  return (
    <>
      <TitleFormGeneral>Clients Form</TitleFormGeneral>
      <Form
        className="form-clients"
        style={{ width: "100%" }}
        onFinish={(form) => {
          props.loadFormClientAct(form as FormClientModel, props.opgPicture);
        }}
        validateMessages={validateMessages}
        initialValues={{ codPhoneOpc: "1" }}
      >
        <Content>
          <StatusForm />
          <CompanyInfo />
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
          <br />
          <br />
          <Segmentation />
          <History />
          <br />
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Content>
      </Form>
    </>
  );
};

export default connector(FormClient);
