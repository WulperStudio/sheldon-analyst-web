import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { v4 as uid } from "uuid";

import { RxStatusDataClient, ClientDataModel, Filters } from "./type";
import { GetClientsData } from "./action";

import { TableGeneralPurpose, CheckboxStandard, RowTable } from "./components";

interface PropsMapState {
  isLoading: boolean;
  done: boolean;
  fail: boolean;
  data: ClientDataModel;
  filters: Filters;
}

const mapState = (state: RxStatusDataClient): PropsMapState => {
  return {
    isLoading: state.ClientDataReducer.clientData.isLoading,
    done: state.ClientDataReducer.clientData.done,
    fail: state.ClientDataReducer.clientData.fail,
    data: state.ClientDataReducer.clientData.data,
    filters: state.ClientDataReducer.clientData.filters,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    findClients: () => {
      dispatch(GetClientsData({}));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const TableClients: React.FunctionComponent<Props> = (props) => {
  React.useEffect(() => {
    props.findClients();
  }, []);

  console.log(props);

  return (
    <>
      <TableGeneralPurpose
        thead={[
          <CheckboxStandard key={uid()} text="Select" size={15} />,
          <>Company</>,
          <>Decision Market</>,
          <>Tags</>,
          <>Timeline</>,
          <>Similars</>,
          <>Source</>,
          <>Purchases</>,
        ]}
        tbody={props.data.clients.map((item) => (
          <RowTable key={uid()} {...item} />
        ))}
      />
    </>
  );
};

export default connector(TableClients);
