import React from "react";
import { createGlobalStyle } from "styled-components";
import { connect, ConnectedProps } from "react-redux";

import { LayoutClear } from "../layout";

import { TableClients } from "../components/TableClient";

const GlobalStyle = createGlobalStyle`
    body {
      width: 1587px;
    }
`;

const connector = connect(null, null);

type Props = ConnectedProps<typeof connector>;

const TableContactsPage: React.FunctionComponent<Props> = () => {
  return (
    <LayoutClear>
      <GlobalStyle />
      <TableClients />
    </LayoutClear>
  );
};

export default connector(TableContactsPage);
