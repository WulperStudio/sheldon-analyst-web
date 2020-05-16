import axios from "axios";
import getConfig from "next/config";
import { Filters, AttributeResponse, ClientDataModel } from "./type";
import { FiltersHidrate, GetClientsDataHidrate } from "./hidrate";

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
