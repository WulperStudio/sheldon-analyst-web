import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { CountryState, RxStatusFormClient, GeneralCInfoState } from "../type";
import { loadCountry, loadGenCInfo } from "../action";

import MultiSelect from "./components/multi_select";
import MultiCountryCities from "./components/multi_country_city";
import SimpleSelect from "./components/simple_select";
import { Row, TitleSectionForm, ContentTwinsSelectMultiple } from "./styled";

interface PropsMapState {
  country: CountryState;
  genCInfo: GeneralCInfoState;
}

const mapState = (state: RxStatusFormClient): PropsMapState => {
  return {
    country: state.FormClientReducer.country,
    genCInfo: state.FormClientReducer.genCInfo,
  };
};

const mapDispatch = (dispatch: Function) => {
  return {
    loadCountryAct: (find: string) => {
      dispatch(loadCountry(find));
    },
    genCInfoStart: () => {
      dispatch(loadGenCInfo());
    },
  };
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

const Segmentation: React.FunctionComponent<Props> = (props) => {
  const p = ["h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9"];

  React.useEffect(() => {
    props.genCInfoStart();
  }, []);

  const [country, setCountry] = React.useState("");
  React.useEffect(() => {
    props.loadCountryAct(country);
  }, [country]);

  return (
    <>
      <Row>
        <TitleSectionForm>Segmentation</TitleSectionForm>
      </Row>
      <Row>
        <MultiCountryCities
          name="country"
          data={props.country.list}
          placeholder="Country & City"
          addTag={true}
          search={(value) => setCountry(value)}
          vdStatus={props.country.isLoading ? "validating" : undefined}
        />
        <MultiSelect
          name="interests"
          data={props.genCInfo.interests}
          placeholder="Tags & Interests"
          addTag={true}
        />
      </Row>
      <Row>
        <MultiSelect
          name="sector"
          data={props.genCInfo.companySector}
          placeholder="Sectors search"
          addTag={true}
        />
        <ContentTwinsSelectMultiple>
          <MultiSelect
            name="area"
            data={props.genCInfo.companyArea}
            label="Area & Position"
            placeholder="Area"
            addTag={true}
            twins={1}
          />
          <MultiSelect
            name="position"
            data={props.genCInfo.companyPosition}
            placeholder="Position"
            label=""
            addTag={true}
            twins={2}
          />
        </ContentTwinsSelectMultiple>
      </Row>
      <Row>
        <MultiSelect
          name="services"
          data={props.genCInfo.companyProducts}
          placeholder="Products & Services"
          addTag={true}
        />
        <SimpleSelect
          name="nse"
          data={props.genCInfo.nse}
          placeholder="NSE"
          addTag={false}
        />
      </Row>
    </>
  );
};

export default connector(Segmentation);
