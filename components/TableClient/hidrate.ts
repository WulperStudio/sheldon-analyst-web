/* eslint-disable @typescript-eslint/camelcase */
import { AxiosResponse } from "axios";
import {
  AttributeResponse,
  Filters,
  ClientDataModel,
  ClientsData,
} from "./type";

export const FiltersHidrate = (filters: Filters): Filters => {
  return {
    names: filters.names || [],
    company_sector: filters.company_sector || [],
    country: filters.country || [],
    funnel_status: filters.funnel_status || [],
    potential_size: filters.potential_size || [],
  };
};

export const GetClientsDataHidrate = ({
  data: { data },
}: AxiosResponse<AttributeResponse>): ClientDataModel => {
  return {
    clients: data.contacts.map<ClientsData>((item) => ({
      companyName: item.company_name,
      companySite: item.web_url,
      name: item.decisionmaker,
      lastName: item.lastname,
      area: item.company_area,
      position: item.company_position,
      interests: item.interests,
      country: item.country,
      companyLinkedin: item.company_linkedin_url,
      companySize: item.potential_size,
      companySector: item.company_sector,
      companyProducts: item.company_products,
      linkedinUrl: item.linkedin_url,
      birthday: item.birthday,
      sex: item.sex,
      nse: item.nse,
      verified: item.verified,
    })),
    total: data.total,
    pages: data.pages,
  };
};
