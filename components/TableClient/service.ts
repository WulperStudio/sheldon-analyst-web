import axios from "axios";
import getConfig from "next/config";
import {
  Filters,
  AttributeResponse,
  ClientDataModel,
  GeneralFiltersModel,
} from "./type";
import {
  FiltersHidrate,
  GetClientsDataHidrate,
  successGetFiltersHidrate,
} from "./hidrate";

const {
  publicRuntimeConfig: { API_ANALYST },
} = getConfig();

export const getDataClientsService = async (
  token: string,
  filters: Filters
): Promise<ClientDataModel> => {
  filters = FiltersHidrate(filters);
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/read_contacts`,
    {
      filters: filters,
      page: 1,
      limit: 50,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return GetClientsDataHidrate(response);
};

export const getFiltersService = async (
  token: string
): Promise<GeneralFiltersModel> => {
  const response = await axios.post<AttributeResponse>(
    `${API_ANALYST}/get_general_contact_info`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return successGetFiltersHidrate(response);
};
