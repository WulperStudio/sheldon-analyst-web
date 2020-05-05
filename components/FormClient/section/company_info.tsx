import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RxStatusFormClient, OpenGraphModel } from "../type";
import { submitOpenGraph } from "../action";

import SimpleSelect from "./components/simple_select";
import SimpleInputText from "./components/simple_input_text";
import MultiSelect from "./components/multi_select";
import ShowOpenGraph from "./components/show_open_graph";

import { Row, TitleSectionForm } from "./styled";
import Loader from "@assets/loader.svg";
import Broken from "@assets/broken.png";
import { validateFieldUrl } from "../../../helpers/valid_form_client";

interface PropsMapState extends OpenGraphModel {
  potentialSize: Array<string>;
}

const mapState = (state: RxStatusFormClient): PropsMapState => {
  return {
    ...state.FormClientReducer.opg,
    potentialSize: state.FormClientReducer.genCInfo.potentialSize,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    getOpG: (url: string) => {
      dispatch(submitOpenGraph(url));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const CompanyInfo: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Row>
        <TitleSectionForm id="company">Company info</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText name="companyName" placeholder="Company Name" />
        <ShowOpenGraph
          title={props.title}
          desc={props.desc}
          url={props.url}
          image={props.image}
          LoadIcon={Loader}
          isLoading={props.isLoading}
          defaultImage={Broken}
          nodata={props.nodata}
        />
      </Row>
      <Row>
        <SimpleSelect
          name="companySize"
          data={props.potentialSize}
          placeholder="Company Size"
          addTag={false}
        />
        <SimpleInputText
          name="companySite"
          placeholder="Company Site"
          onBlurValue={(value) => props.getOpG(value)}
          validator={validateFieldUrl("Company Site")}
        />
      </Row>
      <Row>
        <SimpleInputText
          name="linkedin"
          placeholder="Linkedin"
          validator={validateFieldUrl("Linkedin")}
        />
        <MultiSelect
          name="competitors"
          data={[]}
          placeholder="Competitors"
          addTag={true}
        />
      </Row>
    </>
  );
};

export default connector(CompanyInfo);
