import React from "react";
// import { connect, ConnectedProps } from "react-redux";

// import { RxStatusFormClient, OpenGraphModel } from "../type";
// import { submitOpenGraph } from "../action";

import MultiSelect from "../../../components/FormClient/section/components/multi_select";
import SimpleSelect from "../../../components/FormClient/section/components/simple_select";

import { Row, TitleSectionForm } from "../../FormClient/section/styled";

// interface PropsMapState extends OpenGraphModel {
//   potentialSize: Array<string>;
// }

// const mapState = (state: RxStatusFormClient): PropsMapState => {
//   return {
//     ...state.FormClientReducer.opg,
//     potentialSize: state.FormClientReducer.genCInfo.potentialSize,
//   };
// };

// const mapDispatch = (dispatch: Function) => {
//   return {
//     getOpG: (url: string) => {
//       dispatch(submitOpenGraph(url));
//     },
//   };
// };

// const connector = connect(mapState, mapDispatch);

// type Props = ConnectedProps<typeof connector>;

const Segmentation: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm id="company">Segmentation</TitleSectionForm>
      </Row>
      <Row>
        <MultiSelect
          name="competitors"
          data={[]}
          placeholder="Competitors"
          addTag={true}
        />
        <MultiSelect
          name="tag_interests"
          data={[]}
          placeholder="Tag & Interests"
          addTag={true}
        />
      </Row>
      <Row>
        <MultiSelect
          name="sectors"
          data={[]}
          placeholder="Sectors search"
          addTag={true}
        />
        <MultiSelect
          name="area_position"
          data={[]}
          placeholder="Area & Position"
          addTag={true}
        />
      </Row>
      <Row>
        <MultiSelect
          name="advertisers"
          data={[]}
          placeholder="Advertisers"
          addTag={true}
        />
        <MultiSelect
          name="area_position"
          data={[]}
          placeholder="Area & Position"
          addTag={true}
        />
      </Row>
      <Row>
        <SimpleSelect
          name="age"
          data={["Monthly"]}
          placeholder="Age margins"
          addTag={false}
        />
        <SimpleSelect
          name="??????"
          data={[]}
          placeholder="??????"
          addTag={false}
        />
      </Row>
      <Row>
        <SimpleSelect
          name="nse"
          data={["High"]}
          placeholder="NSE"
          addTag={false}
        />
      </Row>
    </>
  );
};

// export default connector(Segmentation);

export default Segmentation;
