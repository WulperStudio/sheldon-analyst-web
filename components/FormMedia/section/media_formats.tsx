import React from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
// import { connect, ConnectedProps } from "react-redux";

// import { RxStatusFormClient, OpenGraphModel } from "../type";
// import { submitOpenGraph } from "../action";

import SimpleInputText from "../../../components/FormClient/section/components/simple_input_text";
import SimpleSelect from "../../../components/FormClient/section/components/simple_select";

import {
  Row,
  TitleSectionForm,
  CloseDecisionMaker,
} from "../../../components/FormClient/section/styled";

interface PropsParent {
  reference: number;
  onClosing: Function;
  isClosing: boolean;
  groupName?: string;
}

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

const MediaFormats: React.FunctionComponent<PropsParent> = (props) => {
  return (
    <>
      <Row>
        {!props.isClosing ? (
          <TitleSectionForm id="company">Media formats</TitleSectionForm>
        ) : null}
        {props.isClosing ? (
          <CloseDecisionMaker top={10} onClick={() => props.onClosing()}>
            <CloseSquareOutlined />
          </CloseDecisionMaker>
        ) : null}
      </Row>
      <Row>
        <SimpleSelect
          name={
            props.groupName ? [props.groupName, "mediaFormat"] : "mediaFormat"
          }
          data={[]}
          placeholder="Media Format"
          addTag={false}
        />
        <SimpleInputText
          name={props.groupName ? [props.groupName, "formatUrl"] : "formatUrl"}
          placeholder="Format URL"
        />
      </Row>
    </>
  );
};

// export default connector(MediaFormats);

export default MediaFormats;
