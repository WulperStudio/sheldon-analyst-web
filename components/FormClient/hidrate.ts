import { AxiosResponse } from "axios";
import {
  AttributeResponse,
  OpenGraphModel,
  ServiceOpenGraph,
  CodeNumberModel,
  CountryModel,
  GeneralCInfoModel,
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
