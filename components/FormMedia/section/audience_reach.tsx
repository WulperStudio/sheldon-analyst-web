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

const AudienceReach: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm id="company">Audience Reach</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText name="personsReach" placeholder="Persons Reach" />
        <SimpleSelect
          name="exposure"
          data={["Monthly"]}
          placeholder="Exposure"
          addTag={false}
        />
      </Row>
      <Row>
        <SimpleInputText name="costContact" placeholder="Cost per Contact" />
        <SimpleInputText name="reachSource" placeholder="Reach Source" />
      </Row>
    </>
  );
};

// export default connector(AudienceReach);

export default AudienceReach;
