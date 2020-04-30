import React from "react";

import SimpleSelect from "./components/simple_select";
import SimpleInputText from "./components/simple_input_text";

import { Row, TitleSectionForm } from "./styled";
import * as TestSvg from "@assets/test.svg";

const CompanyInfo: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm>Company info</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText placeholder="Company Name" AddIcon={TestSvg} />
        <SimpleInputText placeholder="Company Site" />
      </Row>
      <Row>
        <SimpleSelect
          data={[]}
          placeholder="Company Size"
          addTag={false}
          AddIcon={TestSvg}
        />
        <SimpleInputText placeholder="Company picture" />
      </Row>
      <Row>
        <SimpleInputText placeholder="Linkedin" AddIcon={TestSvg} />
        <SimpleInputText placeholder="Competitors" AddIcon={TestSvg} />
      </Row>
    </>
  );
};

export default CompanyInfo;
