import React from "react";
// import { connect, ConnectedProps } from "react-redux";

// import { RxStatusFormClient, OpenGraphModel } from "../type";
// import { submitOpenGraph } from "../action";

import SimpleInputText from "../../../components/FormClient/section/components/simple_input_text";
import SimpleSelect from "../../../components/FormClient/section/components/simple_select";

import {
  Row,
  TitleSectionForm,
} from "../../../components/FormClient/section/styled";

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

const MediaInfo: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Row>
        <TitleSectionForm id="company">Media information</TitleSectionForm>
      </Row>
      <Row>
        <SimpleInputText name="mediaName" placeholder="Media Name" />
        <SimpleInputText name="mediaGroup" placeholder="Media Group" />
      </Row>
      <Row>
        <SimpleSelect
          name="mediaType"
          data={["tv", "radio", "social network"]}
          placeholder="Media Type"
          addTag={false}
        />
        <SimpleInputText name="mediaPicture" placeholder="Media Picture" />
      </Row>
      <Row>
        <SimpleInputText name="mediaSite" placeholder="Media Site" />
      </Row>
    </>
  );
};

// export default connector(MediaInfo);

export default MediaInfo;
