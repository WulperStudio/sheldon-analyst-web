import React from "react";

import { WrapperTable, TableHead, TableH, TableR } from "../../styled";

interface Props {
  thead: Array<React.ReactNode>;
  tbody: Array<React.ReactNode>;
}

const TableGeneralPurpose: React.FunctionComponent<Props> = (props) => {
  return (
    <WrapperTable>
      <table>
        <TableHead>
          <tr>
            {props.thead.map((item, key) => (
              <TableH key={`thead-${key}`}>{item}</TableH>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {props.tbody.map((item, key) => (
            <TableR key={`tbody-${key}`}>{item}</TableR>
          ))}
        </tbody>
      </table>
    </WrapperTable>
  );
};

export default TableGeneralPurpose;
