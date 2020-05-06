import React from "react";
import { connect, ConnectedProps } from "react-redux";

import LayoutGeneric from "../layout/generic";

import { TableClients } from "../components/TableClient";

const connector = connect(null, null);

type Props = ConnectedProps<typeof connector>;

const TableContactsPage: React.FunctionComponent<Props> = () => {
  return (
    <LayoutGeneric background="#F1F4F9">
      <TableClients />
    </LayoutGeneric>
  );
};

export default connector(TableContactsPage);
