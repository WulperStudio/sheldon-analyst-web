import React from "react";

import MultiSelect from "./components/multi_select";
import SimpleSelect from "./components/simple_select";
import { Row, TitleSectionForm } from "./styled";
import * as TestSvg from "@assets/test.svg";

const Segmentation: React.FunctionComponent<{}> = () => {
  const p = ["h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9"];
  return (
    <>
      <Row>
        <TitleSectionForm>Segmentation</TitleSectionForm>
      </Row>
      <Row>
        <MultiSelect
          name="country"
          data={p}
          placeholder="Country & City"
          addTag={true}
        />
        <MultiSelect
          name="interests"
          data={p}
          placeholder="Tags & Interests"
          addTag={true}
        />
      </Row>
      <Row>
        <MultiSelect
          name="sector"
          data={p}
          placeholder="Sectors search"
          addTag={true}
        />
        <MultiSelect name="" data={p} placeholder="Area search" addTag={true} />
      </Row>
      <Row>
        <MultiSelect
          name="services"
          data={p}
          placeholder="Products & Services"
          addTag={true}
        />
        <MultiSelect name="tags" data={p} placeholder="Tags" addTag={true} />
      </Row>
      <Row>
        <SimpleSelect
          name="age"
          data={p}
          placeholder="Age margins"
          addTag={false}
          AddIcon={TestSvg}
        />
        <SimpleSelect
          name="sex"
          data={p}
          placeholder="Sex margins"
          addTag={false}
          AddIcon={TestSvg}
        />
      </Row>
      <Row>
        <SimpleSelect
          name="nse"
          data={p}
          placeholder="NSE"
          addTag={false}
          AddIcon={TestSvg}
        />
      </Row>
    </>
  );
};

export default Segmentation;
