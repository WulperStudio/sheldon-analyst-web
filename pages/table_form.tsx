import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { LayoutClear } from "../layout";

import { TableClients } from "../components/TableClient";

const connector = connect(null, null);

type Props = ConnectedProps<typeof connector>;

const TableContactsPage: React.FunctionComponent<Props> = () => {
  return (
    <LayoutClear>
      <TableClients />
    </LayoutClear>
  );
};

export default connector(TableContactsPage);
