import React from "react";
// import { connect, ConnectedProps } from "react-redux";

// import { RxStatusFormClient, OpenGraphModel } from "../type";
// import { submitOpenGraph } from "../action";

import SimpleInputText from "../../FormClient/section/components/simple_input_text";
import SimpleSelect from "../../FormClient/section/components/simple_select";

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

const AdvanceStatistics: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm id="company">Advance Statistics</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText name="impactCause" placeholder="Impact Cause" />
        <SimpleSelect
          name="recommended"
          data={["Branding"]}
          placeholder="Recommended for"
          addTag={false}
        />
      </Row>
      <Row>
        <SimpleInputText
          name="secondsPermanency"
          placeholder="Seconds Permanency"
        />
        <SimpleInputText name="frecuency" placeholder="Frecuency" />
      </Row>
    </>
  );
};

// export default connector(AdvanceStatistics);

export default AdvanceStatistics;
