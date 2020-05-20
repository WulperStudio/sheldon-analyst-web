import React from "react";

import {
  WrapperTable,
  TableAbsolute,
  TableRelative,
  TableHead,
  TableH,
  TableR,
} from "../../styled";

interface Props {
  thead: Array<React.ReactNode>;
  tbody: Array<React.ReactNode>;
}

const TableGeneralPurpose: React.FunctionComponent<Props> = (props) => {
  const [refTable, setRefTable] = React.useState<Node | undefined>(undefined);

  React.useEffect(() => {
    if (process.browser && refTable) {
      document.getElementById("table-header-content")?.appendChild(refTable);
    }
  }, [refTable]);

  return (
    <>
      <div className="trap-table-margins ttm-left"></div>
      <div className="trap-table-margins ttm-right"></div>
      <WrapperTable>
        <TableAbsolute
          className="table-header"
          ref={(ref: Node) => setRefTable(ref)}
        >
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
        </TableAbsolute>
        <TableRelative className="table-body">
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
        </TableRelative>
      </WrapperTable>
    </>
  );
};

export default TableGeneralPurpose;
