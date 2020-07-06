/* eslint-disable @typescript-eslint/camelcase */
import { AxiosResponse } from "axios";
import {
  AttributeResponse,
  OpenGraphModel,
  ServiceOpenGraph,
  CodeNumberModel,
  CountryModel,
  GeneralCInfoModel,
  FormClientModel,
  RequestSaveDataSubmit,
  DecisionMakerDataSubmit,
} from "./type";

export const successOpGHidrate = ({
  data: { data },
}: AxiosResponse<AttributeResponse>): OpenGraphModel => {
  data = data as ServiceOpenGraph;
  return {
    title: data.og_title || undefined,
    desc: data.og_desc || undefined,
    image: data.og_image || undefined,
    url: data.og_url,
    isLoading: false,
    nodata: false,
  };
};

export const successCodeNumHidrate = ({
  data: { data },
}: AxiosResponse<AttributeResponse>): Array<CodeNumberModel> => {
  data = data as Array<CodeNumberModel>;
  return data.map((item) => ({
    Iso2: item.Iso2,
    Name: item.Name,
    Iso3: item.Iso3,
    Unicode: item.Unicode,
    Dial: item.Dial,
    Currency: item.Currency,
    Capital: item.Capital,
    Continent: item.Continent,
  }));
};

export const successCountryHidrate = ({
  data: { data },
}: AxiosResponse<AttributeResponse>): Array<CountryModel> => {
  data = data as Array<CountryModel>;
  return data.map((item) => ({
    country: item.country,
    sortCities: item.sortCities,
  }));
};

export const successGenCInfoHidrate = ({
  data: { data },
}: AxiosResponse<AttributeResponse>): GeneralCInfoModel => {
  data = data as GeneralCInfoModel;
  return {
    potentialSize: data.potentialSize,
    interests: data.interests,
    companySector: data.companySector,
    companyArea: data.companyArea,
    companyPosition: data.companyPosition,
    companyProducts: data.companyProducts,
    nse: data.nse,
  };
};

export const submitFormClientHidrate = (
  form: FormClientModel
): RequestSaveDataSubmit => {
  const DecisionMarkets = form.decisionMaker.map((item) => {
    const decision: DecisionMakerDataSubmit = {
      decisionmaker: item.name?.split(" ").slice(0, 1).join(" "),
      lastname: item.name?.split(" ").slice(1, item.name?.length).join(" "),
      cellphone_whatsapp: item.cellPhone,
      personal_companymail: item.companyEmail,
      personal_mail: item.personaEmail,
      facebook_url: item.facebook,
      linkedin_url: item.personalLinkedin,
    };
    return decision;
  });

  const {
    name,
    cellPhone,
    cellPhoneCode,
    personaEmail,
    companyEmail,
    personalLinkedin,
    facebook,
  } = form.principalDecisionMaker;

  return {
    company_name: form.companyName,
    potential_size: form.companySize,
    web_url: form.companySite,
    company_linkedin_url: form.linkedin,

    decisionmaker: name?.split(" ").slice(0, 1).join(" "),
    lastname: name?.split(" ").slice(1, name?.length).join(" "),
    cellphone_whatsapp: `+${cellPhoneCode} ${cellPhone}`,
    personal_companymail: companyEmail,
    personal_mail: personaEmail,
    facebook_url: facebook,
    linkedin_url: personalLinkedin,

    country: form.country?.split(", ").slice(0, 1).join(" "),
    city: form.country?.split(", ").slice(1, 2).join(" "),
    interests: form.interests,
    company_sector: form.sector,
    company_area: form.area,
    company_position: form.position,
    company_products: form.services,
    nse: form.nse,
    picture_url: form.picture,
    extra_decision_market: DecisionMarkets,
  };
};
