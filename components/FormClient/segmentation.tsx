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
        <MultiSelect data={p} placeholder="Country & City" addTag={true} />
        <MultiSelect data={p} placeholder="Tags & Interests" addTag={true} />
      </Row>
      <Row>
        <MultiSelect data={p} placeholder="Sectors search" addTag={true} />
        <MultiSelect data={p} placeholder="Area search" addTag={true} />
      </Row>
      <Row>
        <MultiSelect data={p} placeholder="Products & Services" addTag={true} />
        <MultiSelect data={p} placeholder="Tags" addTag={true} />
      </Row>
      <Row>
        <SimpleSelect
          data={p}
          placeholder="Age margins"
          addTag={false}
          AddIcon={TestSvg}
        />
        <SimpleSelect
          data={p}
          placeholder="Sex margins"
          addTag={false}
          AddIcon={TestSvg}
        />
      </Row>
      <Row>
        <SimpleSelect
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
