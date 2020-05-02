import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RxStatusFormClient, OpenGraphModel } from "../type";
import { submitOpenGraph } from "../action";

import SimpleSelect from "./components/simple_select";
import SimpleInputText from "./components/simple_input_text";
import MultiSelect from "./components/multi_select";
import ShowOpenGraph from "./components/show_open_graph";

import { Row, TitleSectionForm } from "./styled";
import * as TestSvg from "@assets/test.svg";
import Loader from "@assets/loader.svg";
import Picture from "@assets/picture.svg";
import { validateFieldUrl } from "../../../helpers/valid_form_client";

const mapState = (state: RxStatusFormClient): OpenGraphModel => {
  return {
    ...state.FormClientReducer.opg,
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
        <TitleSectionForm>Company info</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText
          name="company_name"
          placeholder="Company Name"
          AddIcon={TestSvg}
          required={true}
        />
        <ShowOpenGraph
          title={props.title}
          desc={props.desc}
          url={props.url}
          image={props.image}
          LoadIcon={Loader}
          isLoading={props.isLoading}
          defaultImage={Picture}
          nodata={props.nodata}
        />
      </Row>
      <Row>
        <SimpleSelect
          name="company_size"
          data={[]}
          placeholder="Company Size"
          addTag={false}
          AddIcon={TestSvg}
        />
        <SimpleInputText
          name="company_site"
          placeholder="Company Site"
          onBlurValue={(value) => props.getOpG(value)}
          validator={validateFieldUrl}
          required={true}
        />
      </Row>
      <Row>
        <SimpleInputText
          name="linkedin"
          placeholder="Linkedin"
          AddIcon={TestSvg}
          validator={validateFieldUrl}
          required={true}
        />
        <MultiSelect
          name="competitors"
          data={[]}
          placeholder="Competitors"
          addTag={true}
          required={true}
        />
      </Row>
    </>
  );
};

export default connector(CompanyInfo);
