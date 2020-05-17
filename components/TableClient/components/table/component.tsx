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
  const [hozScroll, setHozScroll] = React.useState<number | undefined>(
    undefined
  );
  if (process.browser) {
    window.addEventListener("scroll", () => {
      const hoz = window.scrollX;
      setHozScroll(95 - hoz);
    });
  }

  return (
    <>
      <div className="trap-table-margins ttm-left"></div>
      <div className="trap-table-margins ttm-right"></div>
      <WrapperTable>
        <TableAbsolute left={hozScroll}>
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
        <TableRelative left={hozScroll}>
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
