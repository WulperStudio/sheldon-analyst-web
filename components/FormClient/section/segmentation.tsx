import React from "react";

import MultiSelect from "./components/multi_select";
import SimpleSelect from "./components/simple_select";
import { Row, TitleSectionForm, ContentTwinsSelectMultiple } from "./styled";

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
        <ContentTwinsSelectMultiple>
          <MultiSelect
            name="area"
            data={p}
            label="Area & Position"
            placeholder="Area"
            addTag={true}
            twins={1}
          />
          <MultiSelect
            name="position"
            data={p}
            placeholder="Position"
            label=""
            addTag={true}
            twins={2}
          />
        </ContentTwinsSelectMultiple>
      </Row>
      <Row>
        <MultiSelect
          name="services"
          data={p}
          placeholder="Products & Services"
          addTag={true}
        />
        <SimpleSelect name="nse" data={p} placeholder="NSE" addTag={false} />
      </Row>
    </>
  );
};

export default Segmentation;
