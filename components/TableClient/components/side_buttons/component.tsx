import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RxStatusDataClient, GeneralFiltersState, Filters } from "../../type";
import { GetClientsData, GetFilters } from "../../action";

import { WrapperButtons } from "./styled";
import { ButtonGeneralComponent } from "../button_general";
import { FloatSelectFilter } from "../float_select_filters";

import * as Icon3 from "@assets/icon-3.svg";

interface PropsMapState {
  genealFilters: GeneralFiltersState;
}

const mapState = (state: RxStatusDataClient): PropsMapState => {
  return {
    genealFilters: state.ClientDataReducer.genealFilters,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    getFilters: () => {
      dispatch(GetFilters());
    },
    getClientsData: (filters: Filters) => {
      dispatch(GetClientsData(filters));
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const SideButtons: React.FunctionComponent<Props> = (props) => {
  const [filters, setFilters] = React.useState<Filters | {}>({});
  React.useEffect(() => {
    props.getFilters();
  }, []);
  React.useEffect(() => {
    props.getClientsData(filters);
  }, [filters]);
  return (
    <WrapperButtons>
      <ButtonGeneralComponent color="#343536" focusActive icon={Icon3}>
        Name
        <FloatSelectFilter
          data={[]}
          onChange={(value) => setFilters({ names: value })}
          placeholder="Name"
        />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Country
        <FloatSelectFilter data={[]} placeholder="Country" />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Sectors
        <FloatSelectFilter
          data={props.genealFilters.companySector}
          // eslint-disable-next-line @typescript-eslint/camelcase
          onChange={(value) => setFilters({ company_sector: value })}
          placeholder="Sectors"
        />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Tags
        <FloatSelectFilter
          data={props.genealFilters.interests}
          placeholder="Tags"
        />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Size
        <FloatSelectFilter
          data={props.genealFilters.potentialSize}
          // eslint-disable-next-line @typescript-eslint/camelcase
          onChange={(value) => setFilters({ potential_size: value })}
          placeholder="Size"
        />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Area
        <FloatSelectFilter
          data={props.genealFilters.companyArea}
          placeholder="Area"
        />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent focusActive icon={Icon3}>
        Status
        <FloatSelectFilter data={[]} placeholder="Status" />
      </ButtonGeneralComponent>
      <ButtonGeneralComponent center={true} width={37} focusActive icon={Icon3}>
        <FloatSelectFilter data={[]} placeholder="Location" />
      </ButtonGeneralComponent>
    </WrapperButtons>
  );
};

export default connector(SideButtons);
